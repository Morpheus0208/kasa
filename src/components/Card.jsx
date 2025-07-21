/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le composant Card de la gallery
 */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/_card.scss';

export default function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/fiche-logement/${id}`} className="card__link">
        <img src={cover} alt={title} className="card__image" />
      </Link>
      <h2 className="card__title">{title}</h2>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
