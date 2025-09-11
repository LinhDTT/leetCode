const isValid = require('../problems/easy/020-valid-parentheses');

describe('Valid Parentheses', () => {
  test('should return true for "()"', () => {
    expect(isValid("()")).toBe(true);
  });

  test('should return true for "()[]{}"', () => {
    expect(isValid("()[]{}}")).toBe(false);
  });

  test('should return false for "(]"', () => {
    expect(isValid("(]")).toBe(false);
  });

  test('should return false for "([)]"', () => {
    expect(isValid("([)]")).toBe(false);
  });

  test('should return true for "{[]}"', () => {
    expect(isValid("{[]}")).toBe(true);
  });

  test('should return false for single opening bracket', () => {
    expect(isValid("(")).toBe(false);
  });

  test('should return false for single closing bracket', () => {
    expect(isValid(")")).toBe(false);
  });
});
