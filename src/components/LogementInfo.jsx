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
    <section className="logementinfo">
      <div className="logementinfo__container">
        {/* LEFT BLOCK */}
        <div className="logementinfo__left">
          <h1 className="logementinfo__title">{logement.title}</h1>
          <p className="logementinfo__location">{logement.location}</p>
          <div className="logementinfo__tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="logementinfo__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="logementinfo__right">
          <div className="logementinfo__host">
            <div className="logementinfo__host--name">
              <span>{prenom}</span>
              <span>{nom}</span>
            </div>
            <img
              className="logementinfo__host--avatar"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="logementinfo__rating">
            <Rating rating={logement.rating} />
          </div>
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
  }).isRequired,
};
