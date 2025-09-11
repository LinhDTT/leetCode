# 🔧 Hướng dẫn đẩy lên GitHub

## Bước 1: Cài đặt Git
1. Tải Git từ: https://git-scm.com/downloads
2. Cài đặt với các options mặc định
3. Kiểm tra: Mở PowerShell mới và chạy `git --version`

## Bước 2: Cấu hình Git (lần đầu)
```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

## Bước 3: Tạo GitHub Repository
1. Đăng nhập GitHub.com
2. Click nút **"New"** hoặc **"+"** → **"New repository"**
3. Repository name: `leetcode-javascript`
4. Description: `🚀 LeetCode JavaScript solutions with tests`
5. Chọn **Public** (hoặc Private nếu muốn)
6. **KHÔNG** tick "Add a README file" (vì chúng ta đã có)
7. Click **"Create repository"**

## Bước 4: Đẩy code lên GitHub
Sau khi cài Git, chạy các lệnh sau trong PowerShell:

```bash
# Di chuyển vào thư mục project
cd "E:\Coding\leetCode"

# Khởi tạo Git repository
git init

# Thêm tất cả files
git add .

# Commit đầu tiên
git commit -m "🎉 Initial commit: LeetCode JavaScript project setup

✨ Features:
- Complete project structure with problems/utils/templates
- Jest testing setup with sample test cases
- Comprehensive README with badges and documentation
- GitHub Actions CI/CD workflow
- Helper scripts and utilities
- Sample solutions: Two Sum, Valid Parentheses, Add Two Numbers"

# Thêm remote origin (thay yourusername bằng username GitHub của bạn)
git remote add origin https://github.com/yourusername/leetcode-javascript.git

# Đẩy code lên GitHub
git push -u origin main
```

## Bước 5: Cập nhật thông tin cá nhân

### Trong package.json:
- Thay `yourusername` → username GitHub thực của bạn
- Thay `Your Name` → tên thật của bạn  
- Thay `your.email@example.com` → email của bạn
- Thay `https://yourportfolio.com` → portfolio/website của bạn (nếu có)

### Trong README.md:
- Cập nhật links trong phần "🤝 Connect"
- Thay `yourusername` trong clone URL

### Trong LICENSE:
- Thay `[Your Name]` → tên thật của bạn

## Bước 6: Verify trên GitHub
1. Refresh trang GitHub repository
2. Kiểm tra files đã được upload
3. README.md sẽ hiển thị đẹp với badges và formatting

## 🔄 Workflow sau này

### Khi thêm solution mới:
```bash
# Thêm files mới
git add .

# Commit với message mô tả
git commit -m "✅ Add solution: [Problem Name]

- Problem #123: [Problem Title]
- Time: O(n), Space: O(1)
- Includes test cases and documentation"

# Đẩy lên GitHub
git push
```

### Branches (nâng cao):
```bash
# Tạo branch mới cho feature
git checkout -b feature/add-binary-search-problems

# Sau khi hoàn thành
git checkout main
git merge feature/add-binary-search-problems
git push
```

## 🎯 Tips
- Commit thường xuyên với messages rõ ràng
- Sử dụng emojis trong commit messages cho đẹp
- Tạo branch riêng cho các features lớn
- Update README.md progress table khi add solutions mới
