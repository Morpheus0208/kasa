/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page A Propos.
 */
import { StrictMode } from 'react';
import Navbar from '../layout/Navbar';
import Main from '../layout/Main';
import Footer from '../layout/Footer';

function About() {
  return (
    <StrictMode>
      <Navbar />
      <Main />
      <Footer />
    </StrictMode>
  );
}

export default About;
