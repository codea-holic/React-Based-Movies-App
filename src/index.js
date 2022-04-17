import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Component/Main'
import NavBar from './Component/NavBar'
import MovieApp from './moviesApp';
import InputBox from './Components/InputBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App is used to render reset Counter App
  <>
    <App />
    <Main></Main>
    <InputBox></InputBox>
    <NavBar></NavBar>
    <Pagination></Pagination>
  </>
);