# FairRecAi - Setup Instructions

## 📋 Quick Setup Guide

### Option 1: Download and Push (Recommended)

1. **Download the project files** from this environment
2. **Extract to a folder** on your local machine
3. **Open terminal/command prompt** in that folder
4. **Run these commands:**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: FairRecAi - Fairness-Aware Movie Recommendation System"

# Add your GitHub repository
git remote add origin https://github.com/ankitmrj/FairRecAi.git

# Push to GitHub
git push -u origin main
```

### Option 2: Manual GitHub Upload

1. **Go to** https://github.com/ankitmrj/FairRecAi
2. **Click "uploading an existing file"**
3. **Drag and drop** all project files
4. **Commit directly** to main branch

### Option 3: GitHub Desktop (Easiest)

1. **Download GitHub Desktop** from https://desktop.github.com/
2. **Clone your repository** https://github.com/ankitmrj/FairRecAi.git
3. **Copy all project files** into the cloned folder
4. **Commit and push** using the GUI

## 🚀 After Upload

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

## 📁 Project Structure

```
FairRecAi/
├── src/
│   ├── components/
│   ├── data/
│   ├── types/
│   └── ...
├── docs/
├── public/
├── README.md
├── package.json
└── ...
```

## 🎯 Demo Accounts

- **User**: alice@example.com / password
- **Admin**: admin@example.com / password

## 📞 Need Help?

If you encounter any issues:
1. Check that Node.js is installed (v16+)
2. Ensure all files are in the correct structure
3. Run `npm install` before `npm run dev`

Good luck with your project! 🚀