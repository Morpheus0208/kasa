import { Route, Routes } from 'react-router';
import Home from './styles/pages/Home';
import FicheLogement from './styles/pages/FicheLogement';
import About from './styles/pages/About';
import Error from './styles/pages/Error';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiche-logement/:id" element={<FicheLogement />} />
      <Route path="*" element={<Error />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
