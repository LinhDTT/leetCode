const twoSum = require('../problems/easy/001-two-sum');

describe('Two Sum', () => {
  test('should return indices [0, 1] for nums = [2,7,11,15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('should return indices [1, 2] for nums = [3,2,4], target = 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('should return indices [0, 1] for nums = [3,3], target = 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('should return empty array when no solution exists', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});
