import React, { useState, useEffect, useContext } from 'react';
import { AxiosContext } from '../index';
import BaseLayout from './BaseLayout';

const Director = () => {
    const [directorMovies, setDirectorMovies] = useState({});
    const axiosInstance = useContext(AxiosContext);

    useEffect(() => {
        axiosInstance.get('http://localhost:5000/director/')
            .then(response => {
                setDirectorMovies(response.data);
            });
    }, [axiosInstance]);

    return (
        <BaseLayout>
            <div className="container">
                {Object.entries(directorMovies).map(([director, peliculas]) => (
                    <React.Fragment key={director}>
                        <header>
                            <h2 className="text-center">{director}</h2>
                        </header>
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
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        </BaseLayout>
    );
}

export default Director;
