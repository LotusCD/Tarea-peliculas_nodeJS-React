// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import jwtDecode from 'jwt-decode';  // Updated import

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        const decodedToken = jwtDecode(token);
        console.log('Token expiration time:', new Date(decodedToken.exp * 1000));
        console.log('Current time:', new Date());
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('jwtToken');
            setIsTokenExpired(true);
        }
    }
}, []);

  const login = (token) => {
    setAuthToken(token);
    setIsLoggedIn(true);
    localStorage.setItem('jwtToken', token);
  };

  const logout = () => {
    setAuthToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem('jwtToken');
  };

  return (
    <AuthContext.Provider value={{ authToken, isLoggedIn, login, logout, isTokenExpired, setIsTokenExpired }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
