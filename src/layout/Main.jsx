/**
 * ✅ JSDoc : description du composant
 * Ce composant affiche Le composant Main.
 * Il est utilisé toutes les pages Kasa.
 */
import PropTypes from 'prop-types';
import '../styles/layout/_main.scss';

export default function Main({ modify, children }) {
  return <main className={`main${modify ? ` main--${modify}` : ''}`}>{children}</main>;
}
Main.propTypes = {
  modify: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Main.defaultProps = {
  modify: '',
};
