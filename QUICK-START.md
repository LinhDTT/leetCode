# Hướng dẫn nhanh - LeetCode JavaScript Project

## Cài đặt ban đầu
```bash
npm install
```

## Cách tạo bài toán mới

### 1. Sao chép template
```bash
# Cho bài Easy
cp templates/basic-template.js problems/easy/xxx-ten-bai.js

# Cho bài Array
cp templates/array-template.js problems/medium/xxx-ten-bai.js

# Cho bài Tree
cp templates/tree-template.js problems/hard/xxx-ten-bai.js
```

### 2. Định dạng tên file
- Format: `{số bài}-{tên bài}.js`
- Ví dụ: `001-two-sum.js`, `020-valid-parentheses.js`

### 3. Cập nhật thông tin bài toán
- Điền Problem name, Difficulty, URL
- Thêm mô tả và ví dụ
- Viết solution
- Thêm test cases

## Cách chạy code

### Chạy một bài cụ thể
```bash
node run.js problems/easy/001-two-sum.js
```

### Chạy tests
```bash
# Tất cả tests
npm test

# Test với watch mode
npm run test:watch

# Test với coverage
npm run test:coverage
```

### Chạy test cho một bài cụ thể
```bash
npx jest tests/001-two-sum.test.js
```

## Cấu trúc thư mục
```
leetcode-javascript/
├── problems/
│   ├── easy/              # Bài Easy (1-2 sao)
│   ├── medium/            # Bài Medium (3-4 sao)  
│   └── hard/              # Bài Hard (5 sao)
├── utils/
│   ├── data-structures.js # ListNode, TreeNode, helpers
│   └── helpers.js         # Binary search, sorting, etc.
├── templates/             # Templates cho các loại bài
├── tests/                 # Test cases
└── run.js                 # Script chạy bài cụ thể
```

## Patterns phổ biến

### Array & String
- Two Pointers
- Sliding Window
- Hash Map
- Binary Search

### Tree
- DFS (Pre-order, In-order, Post-order)
- BFS (Level-order traversal)
- Binary Search Tree operations

### Dynamic Programming
- 1D DP
- 2D DP
- Memoization

### Graph
- DFS/BFS traversal
- Shortest path (Dijkstra, BFS)
- Topological sort

## Tips
1. Đọc kỹ constraints để chọn approach phù hợp
2. Vẽ examples ra giấy trước khi code
3. Luôn viết test cases
4. Optimize sau khi có solution đúng
5. Comment giải thích algorithm

## Ví dụ workflow
1. `cp templates/basic-template.js problems/easy/121-best-time-to-buy-stock.js`
2. Cập nhật thông tin bài toán
3. Viết solution
4. `node run.js problems/easy/121-best-time-to-buy-stock.js`
5. Tạo test file trong `tests/`
6. `npm test`
