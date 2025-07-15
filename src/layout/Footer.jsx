/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le Footer.
 */
import logofooter from '../assets/logoFooter.png';
import '../styles/layout/_footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logofooter} alt="Logo Kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
