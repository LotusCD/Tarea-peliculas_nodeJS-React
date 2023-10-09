// RouteGuard.js
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export const RouteGuard = ({ children }) => {
  const { isTokenExpired } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenExpired) {
      navigate('/login');
    }
  }, [isTokenExpired, navigate]);

  return children;
};
