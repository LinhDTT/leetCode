# 🚀 LeetCode JavaScript Solutions

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Jest](https://img.shields.io/badge/Tested%20with-Jest-red.svg)](https://jestjs.io/)

Một collection các giải pháp LeetCode được viết bằng JavaScript với test cases đầy đủ và documentation chi tiết.

## 📊 Progress

| Difficulty | Solved | Total |
|------------|--------|-------|
| Easy       | 2      | 600+  |
| Medium     | 1      | 1300+ |
| Hard       | 0      | 500+  |
| **Total**  | **3**  | **2400+** |

## 📁 Cấu trúc thư mục

```
leetcode-javascript/
├── problems/           # 📚 Solutions theo difficulty
│   ├── easy/          #   🟢 Easy problems
│   ├── medium/        #   🟡 Medium problems  
│   └── hard/          #   🔴 Hard problems
├── utils/             # 🛠️ Utilities & data structures
├── templates/         # 📋 Code templates
├── tests/             # ✅ Test cases
└── run.js            # 🚀 Run specific problem
```

## 🚀 Quick Start

### Cài đặt
```bash
git clone https://github.com/yourusername/leetcode-javascript.git
cd leetcode-javascript
npm install
```

### Chạy một bài toán
```bash
node run.js problems/easy/001-two-sum.js
```

### Chạy tests
```bash
npm test                # Tất cả tests
npm run test:watch      # Watch mode
npm run test:coverage   # With coverage report
```

## 🎯 Solutions

### Easy Problems
- [1. Two Sum](problems/easy/001-two-sum.js) - Hash Map - `O(n)`
- [20. Valid Parentheses](problems/easy/020-valid-parentheses.js) - Stack - `O(n)`

### Medium Problems  
- [2. Add Two Numbers](problems/medium/002-add-two-numbers.js) - Linked List - `O(max(m,n))`

### Hard Problems
- Coming soon...

## 📝 Contributing

### Thêm bài toán mới

1. **Copy template phù hợp:**
```bash
cp templates/basic-template.js problems/easy/xxx-problem-name.js
```

2. **Naming convention:** `{number}-{problem-name}.js`

3. **Cập nhật thông tin:**
   - Problem URL
   - Description & examples
   - Time/Space complexity
   - Solution implementation

4. **Tạo test cases:**
```bash
# Create test file
touch tests/xxx-problem-name.test.js
```

5. **Verify solution:**
```bash
node run.js problems/easy/xxx-problem-name.js
npm test
```

## 🛠️ Patterns & Algorithms

<details>
<summary><strong>📋 Array & String</strong></summary>

- **Two Pointers**: Tìm cặp, palindrome check
- **Sliding Window**: Subarray/substring problems  
- **Hash Map**: Fast lookups, frequency counting
- **Binary Search**: Sorted array operations

</details>

<details>
<summary><strong>🌳 Trees & Graphs</strong></summary>

- **DFS**: Pre/In/Post-order traversal
- **BFS**: Level-order, shortest path
- **Binary Search Tree**: Search, insert, delete
- **Graph Traversal**: Connected components, cycles

</details>

<details>
<summary><strong>🔄 Dynamic Programming</strong></summary>

- **1D DP**: Fibonacci, climbing stairs
- **2D DP**: Grid problems, LCS
- **Memoization**: Top-down approach
- **Tabulation**: Bottom-up approach

</details>

<details>
<summary><strong>🔗 Linked Lists</strong></summary>

- **Two Pointers**: Fast/slow, cycle detection
- **Dummy Node**: Simplify edge cases
- **Reversal**: Iterative vs recursive
- **Merging**: Sorted lists combination

</details>

## 📚 Resources

- [LeetCode](https://leetcode.com/) - Practice platform
- [Neetcode](https://neetcode.io/) - Curated problem lists
- [JavaScript Algorithms](https://github.com/trekhleb/javascript-algorithms) - Reference

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Connect

- 💼 **Portfolio**: [Your Portfolio](https://yourportfolio.com)
- 💻 **GitHub**: [@yourusername](https://github.com/yourusername)  
- 💼 **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

⭐ **Found this helpful?** Give it a star and share with others!
