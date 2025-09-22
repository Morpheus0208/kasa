/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la page principale du site KASA.
 */

import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Main from '../layout/Main';

export default function Home() {
  return (
    <div>
      <Main modify="home">
        <Header modifier="home" title="Chez vous, partout et ailleurs" />
        <Gallery />
      </Main>
    </div>
  );
}
