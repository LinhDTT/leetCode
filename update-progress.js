#!/usr/bin/env node

/**
 * Script để update progress trong README.md
 * Tự động đếm số bài đã solve trong mỗi difficulty
 */

const fs = require('fs');
const path = require('path');

function countSolutions() {
    const difficulties = ['easy', 'medium', 'hard'];
    const counts = {};
    
    difficulties.forEach(diff => {
        const dirPath = path.join(__dirname, 'problems', diff);
        try {
            const files = fs.readdirSync(dirPath);
            const jsFiles = files.filter(file => file.endsWith('.js'));
            counts[diff] = jsFiles.length;
        } catch (error) {
            counts[diff] = 0;
        }
    });
    
    return counts;
}

function updateReadme() {
    const counts = countSolutions();
    const total = counts.easy + counts.medium + counts.hard;
    
    console.log('📊 Current Progress:');
    console.log(`Easy: ${counts.easy}`);
    console.log(`Medium: ${counts.medium}`);
    console.log(`Hard: ${counts.hard}`);
    console.log(`Total: ${total}`);
    
    // Đọc README.md
    const readmePath = path.join(__dirname, 'README.md');
    let content = fs.readFileSync(readmePath, 'utf8');
    
    // Update progress table
    const newTable = `| Difficulty | Solved | Total |
|------------|--------|-------|
| Easy       | ${counts.easy}      | 600+  |
| Medium     | ${counts.medium}      | 1300+ |
| Hard       | ${counts.hard}      | 500+  |
| **Total**  | **${total}**  | **2400+** |`;
    
    // Replace old table
    const tableRegex = /\| Difficulty \| Solved \| Total \|[\s\S]*?\| \*\*Total\*\*  \| \*\*\d+\*\*  \| \*\*2400\+\*\* \|/;
    content = content.replace(tableRegex, newTable);
    
    // Write back
    fs.writeFileSync(readmePath, content, 'utf8');
    console.log('✅ README.md updated successfully!');
}

if (require.main === module) {
    updateReadme();
}

module.exports = { countSolutions, updateReadme };
