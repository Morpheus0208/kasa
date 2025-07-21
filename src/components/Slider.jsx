/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le  Slider des images d'appartement sur la page Fiche Logement.
 */
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/components/_slider.scss';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Slider({ images, titre }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <img
          className="slider__image"
          src={images[currentIndex]}
          alt={`${titre} ${currentIndex}`}
        />
        {hasMultipleImages && (
          <>
            <div className="slider__indicator">
              {currentIndex + 1}/{images.length}
            </div>
            <button type="button" className="slider__arrow slider__arrow--prev" onClick={goPrev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button type="button" className="slider__arrow slider__arrow--next" onClick={goNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  titre: PropTypes.string.isRequired,
};
