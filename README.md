# Git-flow Lab Session 05

## Objective
Implement Git-flow using feature branches, resolve merge conflicts, and automate linting and testing using GitHub Actions.

## Commands
git init
git checkout -b develop
git checkout -b feature/add-multiplication
git add .
git commit -m "Add multiplication feature"
git checkout develop
git merge feature/add-multiplication

## Automation
GitHub Actions runs ESLint and Jest on every push and pull request.
