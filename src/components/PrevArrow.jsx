/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche la fleche precedente du slider.
 */
import PropTypes from 'prop-types';

export default function PrevArrow({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick} aria-label="Précédent" className="slider-arrow-left">
        ←
      </button>
    </div>
  );
}
PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};
