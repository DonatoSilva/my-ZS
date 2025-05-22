import { AnimalNode, isQuestionNode, QuestionNode, TreeNode } from "../interfaces/tree.js";
import fs from "fs";

export class TreeLearning {

    private path = ""
    private route: ('yes' | 'no')[] = [];
    private newQuestion: string = "";
    private newAnimal: string = "";

    constructor(route: ('yes' | 'no')[], path: string) {
        this.route = route;
        this.path = path;
    }

    public setNewValues(question: string, animal: string): void {
        this.newQuestion = question;
        this.newAnimal = animal;
    }

    public resetValues(): void {
        this.newQuestion = "";
        this.newAnimal = "";
    }

    public updateTree() {
        try {
            const json = fs.readFileSync(this.path, "utf-8");
            const tree: TreeNode = JSON.parse(json);
            let currentNode: TreeNode = tree;

            const routeCopy = [...this.route];

            const lastDirection: ('yes' | 'no') = routeCopy.pop() as ('yes' | 'no');

            if (!lastDirection) {
                throw new Error("La ruta está vacía");
            }

            for (let route of routeCopy) {
                if (!tree[route as keyof TreeNode]) {
                    throw new Error(`No se encontró el nodo ${route}`);
                }

                currentNode = currentNode[route as keyof TreeNode];
            }

            if (!this.newAnimal || !this.newQuestion) {
                throw new Error("No se tienen valores en la nueva pregunta o en el nuevo animal");
            }

            if (isQuestionNode(currentNode)) {
                const originalAnimal = ((currentNode as QuestionNode)[lastDirection] as AnimalNode).animal;
                currentNode[lastDirection] = {
                    question: this.newQuestion,
                    yes: {
                        animal: this.newAnimal
                    },
                    no: {
                        animal: originalAnimal
                    }
                }
            }

            fs.writeFileSync(this.path, JSON.stringify(tree, null, 2));
        } catch (error) {
            console.error("Error al actualizar el árbol:", error);
            throw error;
        } finally {
            this.resetValues();
        }
    }
}