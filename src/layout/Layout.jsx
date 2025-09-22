import { Outlet } from 'react-router-dom';
import '../styles/layout/_layout.scss';
import Footer from './Footer';
import Navbar from './Navbar';

/**
 * ✅ JSDoc : Layout global
 * Ce composant gère la structure globale de l’application :
 * Header (Navbar), avec un contenu dynamique (outlet), et Footer.
 */
export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
