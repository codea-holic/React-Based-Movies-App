import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// for routing purpose we have to wrap up everything in BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App is used to render reset Counter App
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);