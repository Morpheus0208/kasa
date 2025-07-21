import PropTypes from 'prop-types';
import '../styles/components/_logement-info.scss';
import Rating from './Rating';

export default function LogementInfo({ logement }) {
  const [prenom, nom] = logement.host.name.split(' ');

  return (
    <section className="logement_info">
      <div className="logement_info-container">
        <div className="logement_info-left">
          <h1 className="logement_info-title">{logement.title}</h1>
          <p className="logement_info-location">{logement.location}</p>
          <div className="logement_info-tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="logement_info-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logement_info-right">
          <div className="logement_info-host">
            <div className="logement_info-hostname">
              <span>{prenom}</span>
              <span>{nom}</span>
            </div>
            <img
              className="logement_info-hostavatar"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="logement__info-rating">
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
    id: PropTypes.string.isRequired,
  }).isRequired,
};
