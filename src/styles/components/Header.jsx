/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche le header sur les pages de l'application Kasa.
 */
import { StrictMode } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Header({ modifier, children }) {
  return (
    <StrictMode>
      <div className={clsx('header', modifier && `header--${modifier}`)}>{children}</div>
    </StrictMode>
  );
}

Header.propTypes = {
  modifier: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Header.defaultProps = {
  modifier: '',
};
