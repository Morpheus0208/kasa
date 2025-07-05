/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le Footer.
 */
import { StrictMode } from 'react';
import { Link } from 'react-dom/client';

export default function Footer() {
  return (
    <StrictMode>
      <footer>
        <img src="/logo-footer.png" alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
        <Link to="/about">About</Link>
      </footer>
    </StrictMode>
  );
}
