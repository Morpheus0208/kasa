/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le header sur les pages de l'application Kasa.
 */
import PropTypes from 'prop-types';

import '../styles/components/_header.scss';

export default function Header({ modifier, title }) {
  return (
    <header className={`header${modifier ? ` header--${modifier}` : ''}`}>
      <div className="header__overlay" />
      {title && <h1 className="header__title">{title}</h1>}
    </header>
  );
}
Header.propTypes = {
  modifier: PropTypes.string.isRequired,
  title: PropTypes.string,
};
Header.defaultProps = {
  title: '',
};
