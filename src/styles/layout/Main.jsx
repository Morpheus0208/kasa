/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche Le composant Main.
 * Il est utilisé toutes les pages Kasa.
 */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { StrictMode } from 'react';

export default function Main({ modifier, children }) {
  return (
    <StrictMode>
      <main className={clsx('main', modifier && `main--${modifier}`)}>{children}</main>
    </StrictMode>
  );
}
Main.propTypes = {
  modifier: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Main.defaultProps = {
  modifier: '',
};
