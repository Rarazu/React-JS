import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Student from './pages/Student';
import Book from './pages/Book';
import Buku from './pages/Buku';
import Avarage from './pages/Avarage'
import Market from './pages/Market';

// load library bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "@fortawesome/fontawesome-free/js/all" //bintang

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
