#!/usr/bin/env bash
# Script to finalize the day's work in a trunk-based development workflow
# - Lint + format
# - Commit propre
# - Merge main
# - Supprimer la branche

set -e

GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}--- Lint & Format ---${NC}"
npm run lint
npm run lint:scss
npm run format

git add .

read -p "Message du commit final: " COMMIT_MSG
git commit -m "$COMMIT_MSG"

CURRENT_BRANCH=$(git branch --show-current)

git push origin "$CURRENT_BRANCH"

git checkout main
git pull origin main
git merge --no-ff "$CURRENT_BRANCH"
git push origin main

git branch -d "$CURRENT_BRANCH"
git push origin --delete "$CURRENT_BRANCH"

echo -e "${GREEN}✅ Fin de journée : Merge & Clean OK.${NC}"
