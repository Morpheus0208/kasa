/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche . Tag.
 */
import PropTypes from 'prop-types';

export default function Tag({ logement }) {
  const index = logement.id;
  return (
    <div className="tag-list">
      {logement.tags.map((tag) => (
        <span key={`${tag}-${index}`} className="tag-list__item">
          {tag}
        </span>
      ))}
    </div>
  );
}

Tag.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
