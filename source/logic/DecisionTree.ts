import initTree from "../data/initTree.json" with { type: "json" };
import { QuestionNode, TreeNode } from "../interfaces/tree.js";

const gameTree: TreeNode = initTree as TreeNode;

export class DecisionTree {
    private root: TreeNode;
    private currentNode: TreeNode;

    constructor() {
        this.root = gameTree;
        this.currentNode = this.root;
    }

    public getRoot(): TreeNode {
        return (this.root as QuestionNode);
    }
}