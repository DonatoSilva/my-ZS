export interface AnimalNode {
    animal: string;
}

export interface QuestionNode {
    question: string;
    yes: TreeNode;
    no: TreeNode | null;
}

export type TreeNode = AnimalNode | QuestionNode;

export const isAnimalNode = (node: TreeNode): node is AnimalNode => {
    return (node as AnimalNode).animal !== undefined;
}

export const isQuestionNode = (node: TreeNode): node is QuestionNode => {
    return (node as QuestionNode).question !== undefined;
}
