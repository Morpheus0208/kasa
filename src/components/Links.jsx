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
            isActive ? 'navbar__links navbar__links--active' : 'navbar__links'
          }
        >
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'navbar__links navbar__links--active' : 'navbar__links'
          }
        >
          A Propos{' '}
        </NavLink>
      </li>
    </ul>
  );
}
