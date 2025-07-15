/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le composant Card de la gallery
 */

import PropTypes from 'prop-types';
import '../styles/components/_card.scss';

export default function Card({ title, cover }) {
  return (
    <article className="card">
      <img src={cover} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
