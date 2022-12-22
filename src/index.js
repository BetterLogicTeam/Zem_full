import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main_dra from "./Components/Main_dra/Main_dra";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import Main_header from "./Components/Main_header/Main_header";
import Refferal_bonus from "./Components/Refferal_bonus/Refferal_bonus";
import Login_page from "./Components/Login_page/Login_page";
import Home_landing from "./Home_components/Home_landing/Home_landing";
import Home_login_page from "./Home_components/Home_login_page/Home_login_page";
import Home_register_page from "./Home_components/Home_register_page/Home_register_page";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
