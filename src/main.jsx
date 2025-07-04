/**
 *  Represents the entry point of the Kasa application.
 *
 *  @author Guillaume Ramonet
 *  @version 1.0.0
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import About from './pages/About';
import Error from './pages/Error';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>
);
