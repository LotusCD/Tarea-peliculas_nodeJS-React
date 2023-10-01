import React, { useState, useEffect, useContext } from 'react';
import { AxiosContext } from '../index';  // Import the AxiosContext
import BaseLayout from './BaseLayout';

const Genero = () => {
    const [peliculas, setPeliculas] = useState([]);
    const axiosInstance = useContext(AxiosContext);  // Access the Axios instance from context

    useEffect(() => {
        axiosInstance.get('http://localhost:5000/genero/')
            .then(response => {
                setPeliculas(response.data);
            });
    }, [axiosInstance]);

    return (
        <BaseLayout>
            <header className="container">
                <h1 className="text-center">Genero</h1>
            </header>
        </BaseLayout>

    );
}

export default Genero;
