/**
 * ✅ JSDoc : description du composant
 * Ce composant Ce contexte permet de partager les données du fichier logements.json
 * à l'ensemble des composants via un Provider + hook personnalisé.
 */

import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import logementsData from '../assets/logements.json';

/**
 * Création du contexte React
 * @type {React.Context<{logements: Array}>}
 */
export const DataContext = createContext();

/**
 * ✅ Composant Provider
 * Ce composant englobe l'application et fournit les données du contexte
 *
 * @param {Object} props - Les props du composant
 * @param {React.ReactNode} props.children - Les composants enfants
 * @returns {JSX.Element}
 */
export default function DataProvider({ children }) {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    // Simulation d'une récupération de données d'une API fetch
    setLogements(logementsData);
  }, []);
  const contextValue = useMemo(() => ({ logements }), [logements]);
  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
}
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
/**
 * ✅ Hook personnalisé : useData
 * Permet aux composants de consommer les données du contexte
 *
 * @returns {{logements: Array}} données du contexte
 * @throws {Error} si utilisé en dehors d’un <DataProvider>
 */
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData doit être utilisé dans un <DataProvider>');
  }
  return context;
}
