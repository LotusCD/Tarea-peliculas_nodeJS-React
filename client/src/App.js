import React from 'react';
import Home from './Components/Home';
import Director from './Components/Director';  // Example additional component
import Genero from './Components/Genero';  // Example additional component
import { Routes, Route } from 'react-router-dom';

import { AxiosContext } from './index';

export const App = ({ axiosInstance }) => {
    return (
        <AxiosContext.Provider value={axiosInstance}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/director" element={<Director />} />
                <Route path="/genero" element={<Genero />} />
            </Routes>
        </AxiosContext.Provider>
    );
};
