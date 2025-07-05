/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche Barre de navigation.
 */
import { StrictMode } from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

export default function Navbar() {
  return (
    <StrictMode>
      <div>
        <Logo />
        <Nav />
      </div>
    </StrictMode>
  );
}
