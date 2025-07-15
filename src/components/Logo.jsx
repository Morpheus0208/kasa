/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le logo de l'application KASA.
 * Il est utilisé dans la barre de navigation.
 */
import logo from '../assets/logo.png';

export default function Logo() {
  return (
    <div className="navbar__logo">
      <img src={logo} alt="Logo Kasa" />
    </div>
  );
}
