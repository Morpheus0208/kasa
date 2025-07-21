/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page A Propos.
 */
import Header from '../components/Header';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Navbar from '../layout/Navbar';

export default function About() {
  return (
    <div>
      <h1>KASA</h1>
      <Navbar />
      <Main modifier="about">
        <Header modifier="about" />
      </Main>
      <Footer />
    </div>
  );
}
