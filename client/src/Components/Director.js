import React, { useState, useEffect, useContext } from 'react';
import { AxiosContext } from '../index';
import BaseLayout from './BaseLayout';
import ModalComponent from './Modal';
import { useAuth } from '../AuthContext'; // Make sure to provide the correct path to AuthContext.js
import { useNavigate } from 'react-router-dom';

import { apiService } from '../Helpers/apiService'; 


const Director = () => {
    const [directorMovies, setDirectorMovies] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [movieDetails, setMovieDetails] = useState({}); 

    const navigate = useNavigate();

    const { authToken } = useAuth(); // Get the authToken using the useAuth hook

    useEffect(() => {
        if (!authToken) {
            navigate('/Login');
        }
    }, [authToken, navigate]);
    
    const fetchMoviesByDirector = () => {
        apiService.get('/Director/', {
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })
        .then(response => {
            setDirectorMovies(response.data);
        })
        .catch(error => {
            const errorMessage = error.response && error.response.data ? error.response.data.message : error.message;
            console.error("Error fetching movies by Director:", errorMessage);
        });
    };
    
    useEffect(() => {
        fetchMoviesByDirector();
    }, []); // Removed dependency on axiosInstance since we're now using apiService
    
    const handleEditClick = (pelicula) => {
        setMovieDetails(pelicula);
        setShowModal(true);
    };
    
    const handleSaveChanges = () => {
        apiService.put(`/movies/${movieDetails._id}`, movieDetails, {
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })
        .then(response => {
            console.log("Movie updated successfully:", response.data);
            setShowModal(false);
            fetchMoviesByDirector();  // Re-fetch data after update
        })
        .catch(error => {
            const errorMessage = error.response && error.response.data ? error.response.data.message : error.message;
            console.error("Error updating movie:", errorMessage);
        });
    };
    
    const handleDelete = () => {
        apiService.delete(`/movies/${movieDetails._id}`, {
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })
        .then(response => {
            console.log("Movie deleted successfully:", response.data);
            setShowModal(false);
            fetchMoviesByDirector();  // Re-fetch data after deletion
        })
        .catch(error => {
            const errorMessage = error.response && error.response.data ? error.response.data.message : error.message;
            console.error("Error deleting movie:", errorMessage);
        });
    };
    
    

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
                                                    <button 
                                                        className="btn btn-warning mt-2" 
                                                        type="button" 
                                                        onClick={() => handleEditClick(pelicula)}
                                                    >
                                                        Edit
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
                <ModalComponent 
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    title="Edit Movie"
                    handleSaveChanges={handleSaveChanges}
                    handleDelete={handleDelete}
                    movieDetails={movieDetails}
                    setMovieDetails={setMovieDetails}
                />
            </div>
        </BaseLayout>
    );
}

export default Director;
