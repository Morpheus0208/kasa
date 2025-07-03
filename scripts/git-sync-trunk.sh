#!/usr/bin/env bash

# Script de synchronisation quotidienne Git avec initialisation Trunk Based

# Vérifier le remote
echo "🔹 Remotes configurés :"
git remote -v
echo ""

# Vérifier la branche active et le tracking
echo "🔹 Branche active et tracking :"
git branch -vv
echo ""

# Vérifier l'état du dépôt
echo "🔹 Etat du dépôt :"
git status
echo ""

# Récupérer les mises à jour distantes
echo "🔹 Récupération des mises à jour distantes..."
git fetch
git pull origin main
echo ""

# Proposer de créer une branche feature du jour
read -p "Voulez-vous créer une branche de feature du jour (Trunk Based) ? (o/n) : " create_branch

if [ "$create_branch" = "o" ]; then
  # Demander le nom de la feature
  read -p "Entrez le nom de la feature (ex: react-router) : " feature_name

  # Nom de la branche avec date et nom
  branch_name="feature/$(date +%Y-%m-%d)-$feature_name"
  git checkout -b "$branch_name"
  echo "✅ Branche $branch_name créée et activée."
  echo ""
else
  echo "✅ Pas de branche créée, vous restez sur la branche actuelle."
  echo ""
fi

# Ajout des modifications locales
echo "🔹 Ajout des modifications locales..."
git add .

# Demande à l'utilisateur s'il souhaite committer
read -p "Voulez-vous committer les changements ajoutés ? (o/n) : " do_commit

if [ "$do_commit" = "o" ]; then
  # Demande le message de commit
  read -p "Entrez le message du commit : " commit_msg
  git commit -m "$commit_msg"
  echo ""
else
  echo "✅ Aucun commit effectué."
  echo ""
fi

# Pousser les changements
current_branch=$(git rev-parse --abbrev-ref HEAD)
echo "🔹 Pousser sur le dépôt distant..."
git push -u origin "$current_branch"
echo ""

echo "✅ Synchronisation et workflow Trunk Based terminés."
