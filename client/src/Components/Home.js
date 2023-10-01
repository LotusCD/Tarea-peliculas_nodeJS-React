import React, { useState, useEffect, useContext } from 'react';
import { AxiosContext } from '../index';  // Import the AxiosContext
import BaseLayout from './BaseLayout';

const Home = () => {
    const [peliculas, setPeliculas] = useState([]);
    const axiosInstance = useContext(AxiosContext);  // Access the Axios instance from context

    useEffect(() => {
        axiosInstance.get('http://localhost:5000/')
            .then(response => {
                setPeliculas(response.data);
            });
    }, [axiosInstance]);

    return (
        <BaseLayout>
            <header className="container">
                <h1 className="text-center">Series en estreno</h1>
                <div className="row">
                    {peliculas.map((pelicula, index) => (
                        <React.Fragment key={pelicula._id}>
                            <div className="col-md-2">
                                <div className="card h-100 mb-4">
                                    <img 
                                        src={pelicula.poster} 
                                        className="card-img-top" 
                                        alt={pelicula.title} 
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{pelicula.title}</h5>
                                        <p className="card-text flex-grow-1">{pelicula.plot}</p>
                                        <div className="d-grid gap-1 mt-auto">
                                            <button 
                                                className="btn btn-primary" 
                                                type="button" 
                                                onClick={() => window.open(`https://www.google.com/search?q=${pelicula.title}`, '_blank')}
                                            >
                                                Ver
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {(index + 1) % 5 === 0 && <div className="w-100 mb-4"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </header>
        </BaseLayout>

    );
}

export default Home;
