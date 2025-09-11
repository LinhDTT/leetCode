#!/usr/bin/env node

/**
 * Script để chạy một bài toán LeetCode cụ thể
 * Usage: node run.js <problem-file>
 * Example: node run.js problems/easy/001-two-sum.js
 */

const path = require('path');
const fs = require('fs');

// Lấy argument từ command line
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Usage: node run.js <problem-file>');
    console.log('Example: node run.js problems/easy/001-two-sum.js');
    process.exit(1);
}

const problemFile = args[0];
const fullPath = path.resolve(problemFile);

// Kiểm tra file có tồn tại không
if (!fs.existsSync(fullPath)) {
    console.error(`Error: File ${problemFile} not found.`);
    process.exit(1);
}

console.log(`Running ${problemFile}...`);
console.log('=' .repeat(50));

try {
    // Require và chạy file
    require(fullPath);
} catch (error) {
    console.error('Error running problem:', error.message);
    process.exit(1);
}

console.log('=' .repeat(50));
console.log('Done!');
