/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le composant  Rating de l'appartement.
 */
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../styles/components/_rating.scss';

export default function Rating({ rating }) {
  const value = Number(rating);
  const stars = [{ id: 's1' }, { id: 's2' }, { id: 's3' }, { id: 's4' }, { id: 's5' }];

  return (
    <div className="rating">
      {stars.map((star, idx) => (
        <FontAwesomeIcon
          key={star.id}
          icon={idx < value ? faStarFull : faStarEmpty}
          className={`rating__star ${idx < value ? 'rating__star--full' : 'rating__star--empty'}`}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};
