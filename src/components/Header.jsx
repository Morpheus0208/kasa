/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le header sur les pages de l'application Kasa.
 */
import PropTypes from 'prop-types';
import '../styles/components/_header.scss';

export default function Header({ image, title }) {
  const style = {
    backgroundImage: `url(${image})`,
  };
  return (
    <header className="header" style={style}>
      <div className="header__overlay" />
      {title && (
        <div className="header__content">
          <h1 className="header__title">{title}</h1>
        </div>
      )}
    </header>
  );
}
Header.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
};
Header.defaultProps = {
  title: '',
};
