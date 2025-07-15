/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le  Slider des images d'appartement sur la page Fiche Logement.
 */

import ImageSlider from './ImageSlider';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

export default function Slider() {
  return (
    <div>
      <ImageSlider />
      <PrevArrow />
      <NextArrow />
    </div>
  );
}
