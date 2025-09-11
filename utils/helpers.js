/**
 * Common helper functions for LeetCode problems
 */

// Binary search template
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Not found
}

// Two pointers - find pair with target sum
function twoSum(arr, target) {
    const map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(arr[i], i);
    }
    
    return [];
}

// Sliding window - maximum sum subarray of size k
function maxSumSubarray(arr, k) {
    if (arr.length < k) return 0;
    
    let maxSum = 0;
    let windowSum = 0;
    
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// DFS template for graph
function dfsGraph(graph, start, visited = new Set()) {
    if (visited.has(start)) return;
    
    visited.add(start);
    console.log(start); // Process node
    
    for (const neighbor of graph[start] || []) {
        dfsGraph(graph, neighbor, visited);
    }
}

// BFS template for graph
function bfsGraph(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node); // Process node
        
        for (const neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Quick sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Merge sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = {
    binarySearch,
    twoSum,
    maxSumSubarray,
    dfsGraph,
    bfsGraph,
    quickSort,
    mergeSort
};
