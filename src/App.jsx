/**
 *  Represents the entry point of the Kasa application.
 *
 *  @author Guillaume Ramonet
 *  @version 1.0.0
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import DataProvider from './Context/DataProvider';
import AppRoutes from './routes/AppRoutes';
import './styles/_app.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <Router>
        <AppRoutes />
      </Router>
    </DataProvider>
  </StrictMode>
);
