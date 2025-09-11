/**
 * Template for Tree problems
 */

// Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Problem: [Tên bài toán]
 * Difficulty: [Easy/Medium/Hard]
 * URL: [Link LeetCode]
 * 
 * @param {TreeNode} root
 * @return {any}
 */
function treeTemplate(root) {
    // Base case
    if (!root) return null;
    
    // Common patterns:
    
    // 1. DFS (Depth-First Search)
    // function dfs(node) {
    //     if (!node) return;
    //     // Process current node
    //     dfs(node.left);
    //     dfs(node.right);
    // }
    
    // 2. BFS (Breadth-First Search)
    // const queue = [root];
    // while (queue.length > 0) {
    //     const node = queue.shift();
    //     // Process current node
    //     if (node.left) queue.push(node.left);
    //     if (node.right) queue.push(node.right);
    // }
    
    // 3. Level Order Traversal
    // const result = [];
    // const queue = [root];
    // while (queue.length > 0) {
    //     const levelSize = queue.length;
    //     const currentLevel = [];
    //     for (let i = 0; i < levelSize; i++) {
    //         const node = queue.shift();
    //         currentLevel.push(node.val);
    //         if (node.left) queue.push(node.left);
    //         if (node.right) queue.push(node.right);
    //     }
    //     result.push(currentLevel);
    // }
    
    return null;
}

module.exports = { treeTemplate, TreeNode };
