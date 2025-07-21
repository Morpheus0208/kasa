/**
 * ✅ JSDoc : Composant basé sur le nom de fichier
 * Ce composant affiche les lien de navigation de l'application KASA.
 * Il est utilisé dans la barre de navigation.
 */
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="navbar__links">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          A Propos{' '}
        </NavLink>
      </li>
    </ul>
  );
}
