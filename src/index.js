import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home/index';
import './styles/global.css'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();