import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TreeNode } from "../../interfaces/tree.js";
import initTree from "../../data/initTree.json" with { type: "json" };

/**
 * Carga el árbol de decisiones desde un archivo JSON
 * @returns El árbol de decisiones cargado
 */
export function loadDecisionTree(): TreeNode {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const jsonPath = path.join(__dirname, '../..', 'data', 'initTree.json');
        const jsonData = fs.readFileSync(jsonPath, 'utf-8');
        const freshTree: TreeNode = JSON.parse(jsonData);

        return freshTree;
    } catch (error) {
        console.error("Error al cargar el árbol de decisiones:", error);
        return initTree as TreeNode;
    }
}