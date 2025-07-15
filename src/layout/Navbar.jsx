/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche Barre de navigation.
 */
import Nav from '../components/Links';
import Logo from '../components/Logo';
import '../styles/layout/_navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Nav />
    </nav>
  );
}
