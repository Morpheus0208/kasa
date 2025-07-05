/**
 *  Represents the entry point of the Kasa application.
 *
 *  @author Guillaume Ramonet
 *  @version 1.0.0
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import AppRoutes from './AppRoutes';
import Navbar from './styles/layout/Navbar';
import Footer from './styles/layout/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  </StrictMode>
);
