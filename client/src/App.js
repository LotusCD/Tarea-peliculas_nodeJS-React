// App.js
import React from 'react';
import Home from './Components/Home';
import Director from './Components/Director';  // Example additional component
import Genero from './Components/Genero';  // Example additional component
import Login from './Components/Login';
import { Routes, Route } from 'react-router-dom';

import { AxiosContext } from './index';
import { AuthContextProvider } from './AuthContext';  // Import the AuthContextProvider
import { RouteGuard } from './RouteGuard';  // Import the RouteGuard component

export const App = ({ axiosInstance }) => {
  return (
    <AxiosContext.Provider value={axiosInstance}>
      {/* Wrap your routes with the AuthContextProvider */}
      <AuthContextProvider>
        {/* Wrap your routes with the RouteGuard component */}
        <RouteGuard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/director" element={<Director />} />
            <Route path="/genero" element={<Genero />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </RouteGuard>
      </AuthContextProvider>
    </AxiosContext.Provider>
  );
};
