/**
 * ✅ JSDoc : description du composant
 * Ce composant est responsable de la gestion des routes de l'application.
 */
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import About from '../pages/About';
import Error from '../pages/Error';
import FicheLogement from '../pages/FicheLogement';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
