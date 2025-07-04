#!/usr/bin/env bash
# Script to initialize a new feature branch in a trunk-based development workflow
# - Te mettre sur main
# - pull la dernière version
# - Créer une branche feature propre
# Usage: ./start-day.sh


set -e

GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}--- Initialisation Trunk Based ---${NC}"

git checkout main
git pull origin main

read -p "Nom court de la feature (ex: login): " FEATURE_NAME
DATE=$(date +%Y-%m-%d)
BRANCH_NAME="feature/${DATE}-${FEATURE_NAME}"

git checkout -b "$BRANCH_NAME"

echo -e "${GREEN}✅ Branche créée : $BRANCH_NAME${NC}"
