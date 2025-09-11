#!/usr/bin/env node

/**
 * Script để tự động add, commit và push solutions mới
 * Usage: node commit-solution.js "Problem Name" [difficulty]
 */

const { execSync } = require('child_process');
const { updateReadme } = require('./update-progress');

function commitSolution(problemName, difficulty = 'easy') {
    try {
        console.log('🔄 Updating progress...');
        updateReadme();
        
        console.log('📦 Adding files to git...');
        execSync('git add .', { stdio: 'inherit' });
        
        const commitMessage = `✅ Add solution: ${problemName}

- New ${difficulty} problem solved
- Updated progress tracker
- Includes test cases and documentation`;
        
        console.log('💾 Committing changes...');
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
        
        console.log('🚀 Pushing to GitHub...');
        execSync('git push', { stdio: 'inherit' });
        
        console.log('✅ Successfully pushed to GitHub!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.log('ℹ️  Make sure Git is configured and you have push permissions.');
    }
}

// Command line usage
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage: node commit-solution.js "Problem Name" [difficulty]');
        console.log('Example: node commit-solution.js "Binary Search" medium');
        process.exit(1);
    }
    
    const problemName = args[0];
    const difficulty = args[1] || 'easy';
    
    commitSolution(problemName, difficulty);
}

module.exports = { commitSolution };
