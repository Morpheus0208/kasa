/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page pour les erreurs 404.
 */

import { Link } from 'react-router-dom';
import Main from '../layout/Main';
import '../styles/pages/_error.scss';

export default function Error() {
  return (
    <div>
      <Main modify="error">
        <h1 className="h1">404</h1>
        <h2 className="h2">Oups! La page que vous demandez n&apos; existe pas.</h2>
        <Link to="/">Retournez sur la page d&apos; accueil </Link>
      </Main>
    </div>
  );
}
