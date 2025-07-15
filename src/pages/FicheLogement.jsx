/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page Fiche Logement pour chaque logement.
 */

// import Description from '../components/Description';
// import DropDown from '../components/DropDown';
// import Owner from '../components/Owner';
// import Rating from '../components/Rating';
// import Slider from '../components/Slider';
import Footer from '../layout/Footer';
// import Main from '../layout/Main';
import Navbar from '../layout/Navbar';

export default function FicheLogement() {
  return (
    <div>
      <Navbar />
      <h1>Fiche Logement</h1>
      {/* <Main>
        <Slider />
        <Description />
        <DropDown />
        <Owner />
        <Rating />
        <h1>page Fiche Logement</h1>
      </Main> */}
      <Footer />
    </div>
  );
}
