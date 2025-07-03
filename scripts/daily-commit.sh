#!/bin/bash

# Couleurs
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}--- Lint JS ---${NC}"
npm run lint

echo -e "${GREEN}--- Lint SCSS ---${NC}"
npm run lint:scss

echo -e "${GREEN}--- Formatage ---${NC}"
npm run format

# Ajout des fichiers
git add .

# Feature flag ?
read -p "S'agit-il d'une feature derrière un flag ? (y/n): " is_flag

if [[ $is_flag == "y" ]]; then
  read -p "Nom du flag: " flag_name
  read -p "Description de la feature: " feature_desc
  commit_message="feat(flag:$flag_name): $feature_desc"
else
  read -p "Description de la feature: " feature_desc
  commit_message="feat: $feature_desc"
fi

# Commit
git commit -m "$commit_message"

# Push
git push

echo -e "${GREEN}Commit et push terminés avec succès.${NC}"
