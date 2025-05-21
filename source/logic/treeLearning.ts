import { TreeNode } from "../interfaces/tree.js";
import fs from "fs";

export class TreeLearning {

    private path = ""
    private route: string[] = [];

    constructor(route: string[], path: string) {
        this.route = route;
        this.path = path;
    }

    private getNavigateTree() {
        try {
            const json = fs.readFileSync(this.path, "utf-8");
            const tree = JSON.parse(json);

            let currentNode = tree;
            for (let route of this.route) {
                if (!currentNode[route]) {
                    throw new Error(`Ruta ${route} no encontrada en el árbol`);
                }

                currentNode = currentNode[route];
            }

            return currentNode;
        } catch (error) {
            console.error("Error while navigating tree:", error);
            throw error;
        }
    }

    public updateTree() {
        try {
            const json = fs.readFileSync(this.path, "utf-8");
            const tree = JSON.parse(json);

            let currentNode = this.getNavigateTree();

            console.log(this.route);

            console.log(currentNode);

            fs.writeFileSync(this.path, JSON.stringify(tree, null, 2));
        } catch (error) {
            console.error("Error al actualizar el árbol:", error);
            throw error;
        }
    }
}