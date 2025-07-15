/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la fleche suivante du slider.
 */
import PropTypes from 'prop-types';

export default function NextArrow({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick} aria-label="Suivant" className="slider-arrow-right">
        ←
      </button>
    </div>
  );
}
NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
