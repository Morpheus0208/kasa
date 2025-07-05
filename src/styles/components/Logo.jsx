/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le logo de l'application KASA.
 * Il est utilisé dans la barre de navigation.
 */
import { StrictMode } from 'react';

export default function Logo() {
  return (
    <StrictMode>
      <img src="/logo.svg" alt="Logo Kasa" />
    </StrictMode>
  );
}
