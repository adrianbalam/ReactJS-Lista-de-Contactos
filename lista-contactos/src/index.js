import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * Bootstrap and Bootstrap Icons Importation
 */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
/**
 * Generic index Styles Importation
 */
import './index.css';
import AppRoutingOne from './AppRoutingOne';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutingOne />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
