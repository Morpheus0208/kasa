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
        <div className="error">
          <h1 className="error__code">404</h1>
          <h2 className="error__text">Oups! La page que vous demandez n&apos; existe pas.</h2>
          <Link to="/" className="error__link">
            Retournez sur la page d&apos; accueil{' '}
          </Link>
        </div>
      </Main>
    </div>
  );
}
