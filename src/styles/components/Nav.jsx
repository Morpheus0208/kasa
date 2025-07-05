/**
 * ✅ JSDoc : Composant basé sur le nom de fichier
 * Ce composant affiche les lien de navigation de l'application KASA.
 * Il est utilisé dans la barre de navigation.
 */
import { StrictMode } from 'react';
import { Link } from 'react-router';

export default function Nav() {
  return (
    <StrictMode>
      <nav>
        <Link to="/">Accueil </Link>
        <Link to="/about">A Propos </Link>
      </nav>
    </StrictMode>
  );
}
