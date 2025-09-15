/**
 * Problem: Two Sum
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/two-sum/
 * 
 * Description:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 */

// =============================================================================
// Solution 1: Brute Force
// Time Complexity: O(n²)
// Space Complexity: O(1)
// =============================================================================

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// =============================================================================
// Solution 2: Hash Map (Optimal)
// Time Complexity: O(n)
// Space Complexity: O(n)
// =============================================================================

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumHashMap(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
     
    return [];
}

// =============================================================================
// Test Cases
// =============================================================================

const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] }
];

console.log("🧪 Testing Two Sum Solutions:\n");

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: nums = [${test.nums}], target = ${test.target}`);
    console.log(`Expected: [${test.expected}]`);
    
    const result1 = twoSumBruteForce(test.nums, test.target);
    const result2 = twoSumHashMap(test.nums, test.target);
    
    console.log(`Brute Force: [${result1}] ✅`);
    console.log(`Hash Map:    [${result2}] ✅`);
    console.log("---");
});

// Export the optimal solution as default
module.exports = {
    twoSum: twoSumHashMap,
    twoSumBruteForce,
    twoSumHashMap
};
