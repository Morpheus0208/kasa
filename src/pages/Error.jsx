/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page pour les erreurs 404.
 */

import { Link } from 'react-router';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

export default function Error() {
  return (
    <div>
      <Navbar />
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n&apos existe pas.</h2>
      <Link to="/">Retournez sur la page d&apos accueil </Link>
      <Footer />
    </div>
  );
}
