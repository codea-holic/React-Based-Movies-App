import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './Components/Navbar';
import Main from './Components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App is used to render reset Counter App
  <>
    <App />
    <NavBar></NavBar>
    <Main></Main>
  </>
);