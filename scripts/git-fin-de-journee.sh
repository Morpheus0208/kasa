#!/usr/bin/env bash

echo "🚀 Clôture de journée Git"

# Aller sur main
git checkout main

# Mettre à jour main
git fetch
git pull origin main

# Vérifier si un merge est en attente
merge_status=$(git status | grep "still merging")
if [ -n "$merge_status" ]; then
  echo "⚠️ Merge en attente de validation."
  read -p "Voulez-vous finaliser le merge avec un commit ? (o/n) : " answer
  if [ "$answer" = "o" ]; then
    git commit -m "merge: finalisation du merge en cours"
    git push origin main
  fi
fi

# Afficher l'état
git status

# Lister les branches locales
echo ""
echo "🌿 Branches locales :"
git branch

# Lister les branches mergées
echo ""
echo "✅ Branches mergées dans main :"
git branch --merged main

# Proposer suppression des branches mergées
read -p "Voulez-vous supprimer les branches mergées localement ? (o/n) : " cleanup
if [ "$cleanup" = "o" ]; then
  branches=$(git branch --merged main | grep -v "\* main")
  for b in $branches; do
    git branch -d "$b"
  done
  echo "✅ Branches mergées supprimées localement."
else
  echo "❎ Pas de suppression effectuée."
fi

# Etat final
echo ""
git status
