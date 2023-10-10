import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import { App } from './App';



// Axios instance
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:5000',
//   // ... any other axios configurations you might have ...
// });

// export const AxiosContext = React.createContext(axiosInstance);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Remove the axiosInstance prop */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
