/**
 * Template for Array/String problems
 */

/**
 * Problem: [Tên bài toán]
 * Difficulty: [Easy/Medium/Hard]
 * URL: [Link LeetCode]
 * 
 * @param {number[]} nums
 * @return {number}
 */
function arrayTemplate(nums) {
    // Common patterns:
    
    // 1. Two Pointers
    // let left = 0, right = nums.length - 1;
    
    // 2. Sliding Window
    // let left = 0, maxLength = 0;
    // for (let right = 0; right < nums.length; right++) {
    //     // Expand window
    //     while (/* condition */) {
    //         // Shrink window
    //         left++;
    //     }
    //     maxLength = Math.max(maxLength, right - left + 1);
    // }
    
    // 3. Hash Map
    // const map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         // Found duplicate or target
    //     }
    //     map.set(nums[i], i);
    // }
    
    return 0;
}

module.exports = arrayTemplate;
