/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page principale du site KASA.
 */
import { StrictMode } from 'react';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Navbar from '../layout/Navbar';
import Header from '../components/Header';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <StrictMode>
      <div>
        <Navbar />
        <Main modifier="home">
          <Header modifier="home" />
          <Gallery />
        </Main>
        <Footer />
      </div>
    </StrictMode>
  );
}
