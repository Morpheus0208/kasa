/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le composant qui permet l'affichage des elements d'informations du logement sous le slider
 */
import PropTypes from 'prop-types';
import '../styles/components/_logement-info.scss';
import Rating from './Rating';

export default function LogementInfo({ logement }) {
  const [prenom, nom] = logement.host.name.split(' ');

  return (
    <section className="logement">
      <div className="logement__left">
        <h1 className="logement__title">{logement.title}</h1>
        <p className="logement__location">{logement.location}</p>
        <div className="logement__tags">
          {logement.tags.map((tag) => (
            <span key={tag} className="logement__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="logement__right">
        <div className="logement__host">
          <div className="logement__host--name">
            <span>{prenom}</span>
            <span>{nom}</span>
          </div>
          <img
            className="logement__host--avatar"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
        <div className="logement__rating">
          <Rating rating={logement.rating} />
        </div>
      </div>
    </section>
  );
}

LogementInfo.propTypes = {
  logement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
