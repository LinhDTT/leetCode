/**
 * Problem 217: Contains Duplicate
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/contains-duplicate/
 * 
 * Description: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 * Constraints:
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */

// =============================================================================
// Solution 1: Hash Set
// Time Complexity: O(n)
// Space Complexity: O(n)
// =============================================================================

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();

    for(let num of nums) {
        if(seen.has(num)) {
            return true;
        } else {
            seen.add(num);
        }
    }
    return false;
}

// =============================================================================
// Test Cases
// =============================================================================

console.log(containsDuplicate([1, 2, 3, 1, 2])); // Expected: true
console.log(containsDuplicate([1, 2, 3, 4]));    // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true

// =============================================================================
// Export for testing
// =============================================================================