/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le groupe de tags associés à un logement.
 * Il est utilisé pour afficher les tags sous le titre du logement.
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
