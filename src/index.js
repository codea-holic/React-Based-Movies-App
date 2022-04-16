import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Component/Main'
import NavBar from './Component/NavBar'
import MovieApp from './moviesApp';
import Main from './Components/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App is used to render reset Counter App
  <>
    <App />
    <h1> Hello </h1>
  </>
);