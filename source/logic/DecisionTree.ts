import { fileURLToPath } from "url";
import initTree from "../data/initTree.json" with { type: "json" };
import { NavOptionsPanelProps } from "../interfaces/navOptionsPanel.js";
import { isAnimalNode, isQuestionNode, TreeNode } from "../interfaces/tree.js";
import { TreeLearning } from "./treeLearning.js";
import path from "path";

const gameTree: TreeNode = initTree as TreeNode;

export class DecisionTree {
    private roadmapRoute: string[] = [];
    private root: TreeNode;
    private currentNode: TreeNode;

    constructor() {
        this.root = gameTree;
        this.currentNode = this.root;
    }

    private getRoot(): TreeNode {
        return this.root;
    }

    private getCurrentNode(): TreeNode {
        return this.currentNode;
    }

    private setCurrentNode(node: TreeNode): void {
        this.currentNode = node;
    }

    private reset(): void {
        this.currentNode = this.getRoot();
    }

    private handleReset(defaultOptions: NavOptionsPanelProps['options']): NavOptionsPanelProps {
        this.reset();
        const rootNode = this.getCurrentNode();
        if (isQuestionNode(rootNode)) {
            return {
                question: rootNode.question,
                options: [
                    { label: "Sí", value: "yes" },
                    { label: "No", value: "no" },
                    ...defaultOptions
                ],
            };
        }
        return {
            question: "Error: No se pudo reiniciar el juego correctamente.",
            options: defaultOptions,
        };
    }

    private handleStartGame(defaultOptions: NavOptionsPanelProps['options']): NavOptionsPanelProps {
        const initialNode = this.getCurrentNode();
        if (isQuestionNode(initialNode)) {
            return {
                question: initialNode.question,
                options: [
                    { label: "Sí", value: "yes" },
                    { label: "No", value: "no" },
                    ...defaultOptions
                ],
            };
        }
        return {
            question: "Error: El juego no pudo iniciar correctamente.",
            options: defaultOptions,
        };
    }

    private handleTeachAnimal(defaultOptions: NavOptionsPanelProps['options']): NavOptionsPanelProps {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const parentDirt = path.join(__dirname, '..');
        const jsonPath = path.join(parentDirt, 'data', 'initTree.json');

        const treeLearning = new TreeLearning(this.roadmapRoute, jsonPath);

        treeLearning.updateTree();
        return {
            question: "Entendido. ¿Qué animal era y qué pregunta lo diferencia?",
            options: [
                ...defaultOptions
            ],
        };
    }

    private navigateQuestionNode(answer: 'yes' | 'no', defaultOptions: NavOptionsPanelProps['options']): NavOptionsPanelProps {
        const currentNode = this.getCurrentNode();
        if (!isQuestionNode(currentNode)) {
            return { question: "Error interno: Se esperaba un nodo de pregunta.", options: defaultOptions };
        }

        this.roadmapRoute.push(answer);
        const nextNode = currentNode[answer];

        if (!nextNode) {
            return {
                question: "¡Me rindo! No logro adivinar en qué animal estás pensando. ¡Los animales son muy misteriosos! 🤔  \n\n ¿Quieres enseñarme en que animal estabas pensando?",
                options: [
                    { label: "Sí, te enseño", value: "teach_animal" },
                    ...defaultOptions
                ],
            };
        }

        this.setCurrentNode(nextNode);
        const newCurrentNode = this.getCurrentNode();

        if (isQuestionNode(newCurrentNode)) {
            return {
                question: newCurrentNode.question,
                options: [
                    { label: "Sí", value: "yes" },
                    { label: "No", value: "no" },
                    ...defaultOptions
                ],
            };
        }

        if (isAnimalNode(newCurrentNode)) {
            return {
                question: `¿El animal en el que estás pensando es un(a) ${newCurrentNode.animal}?`,
                options: [
                    { label: "¡Sí, es correcto!", value: "correct_guess" },
                    { label: "No, te equivocaste", value: "incorrect_guess" },
                    ...defaultOptions
                ],
            };
        }

        return {
            question: "Error: Se llegó a un nodo de tipo desconocido.",
            options: defaultOptions,
        };
    }

    private handleCorrectGuess(defaultOptions: NavOptionsPanelProps['options']): NavOptionsPanelProps {
        return {
            question: "¡Hurra! 🎉 ¡Lo adiviné! Me encanta jugar contigo. ¿Quieres intentar con otro animal?",
            options: defaultOptions,
        };
    }

    private handleIncorrectGuess(defaultOptions: NavOptionsPanelProps['options']): NavOptionsPanelProps {
        return {
            question: "¡Vaya! Me equivoqué. ¿Te gustaría enseñarme en qué animal estabas pensando?",
            options: [
                { label: "Sí, te enseño", value: "teach_animal" },
                ...defaultOptions
            ],
        };
    }

    public processAnswerAndGetUI(answer: string): NavOptionsPanelProps {
        const defaultOptions: NavOptionsPanelProps['options'] = [
            { label: "Reiniciar Juego", value: "reset" },
            { label: "Volver al Menú Principal", value: "initNav" }
        ];

        if (answer === "reset") {
            return this.handleReset(defaultOptions);
        }

        if (answer === "start") {
            return this.handleStartGame(defaultOptions);
        }

        if (answer === 'teach_animal') {
            return this.handleTeachAnimal(defaultOptions);
        }

        const currentNode = this.getCurrentNode();

        if (isQuestionNode(currentNode)) {
            if (answer === 'yes' || answer === 'no') {
                return this.navigateQuestionNode(answer, defaultOptions);
            }
        }

        if (answer === 'correct_guess') {
            return this.handleCorrectGuess(defaultOptions);
        }

        if (answer === 'incorrect_guess') {
            return this.handleIncorrectGuess(defaultOptions);
        }

        return {
            question: "¡Ups! Parece que te perdiste en el bosque de preguntas... ¡Hasta los búhos están confundidos! 🦉",
            options: defaultOptions,
        };
    }
}