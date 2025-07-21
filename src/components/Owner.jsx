/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le composant Owner.
 */

import PropTypes from 'prop-types';

export default function Owner({ nomOwner, imageOwner }) {
  return (
    <div>
      <p>{nomOwner}</p>
      <img src={imageOwner} alt="owner" />
    </div>
  );
}
Owner.propTypes = {
  nomOwner: PropTypes.string.isRequired,
  imageOwner: PropTypes.string.isRequired,
};
