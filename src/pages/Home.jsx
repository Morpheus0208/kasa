/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page principale du site KASA.
 */

import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Navbar from '../layout/Navbar';
import headerBackground from '../assets/headerBackground.png';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main modify="home">
        <Header image={headerBackground} title="Chez vous, partout et ailleurs" />
        <Gallery />
      </Main>
      <Footer />
    </div>
  );
}
