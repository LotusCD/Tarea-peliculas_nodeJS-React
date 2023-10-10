import React, { useState, useEffect, useContext } from 'react';
import { AxiosContext } from '../index'; 
import BaseLayout from './BaseLayout';
import ModalComponent from './Modal';
import { useAuth } from '../AuthContext'; // Make sure to provide the correct path to AuthContext.js
import { useNavigate } from 'react-router-dom';  // Import useNavigate

import { apiService } from '../Helpers/apiService'; 


const Home = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [movieDetails, setMovieDetails] = useState({}); 
    

    const { authToken } = useAuth();
    const navigate = useNavigate();  // Get the navigate function

    useEffect(() => {
        if (!authToken) {
            navigate('/Login');  // Redirect to /Login if there is no valid token
        }
    }, [authToken, navigate]);

    const fetchMovies = () => {
        apiService.get('/', {
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
            
        })
        .then(response => {
            setPeliculas(response.data);
        })
        .catch(error => {
            console.error("Error fetching movies:", error);
        });
    };
    
    useEffect(() => {
        fetchMovies();
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
            fetchMovies();  // Re-fetch data after update
        })
        .catch(error => {
            console.error("Error updating movie:", error);
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
            fetchMovies();  // Re-fetch data after deletion
        })
        .catch(error => {
            console.error("Error deleting movie:", error);
        });
    };
    



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
            </header>
            <ModalComponent 
                show={showModal}
                handleClose={() => setShowModal(false)}
                title="Edit Movie"
                handleSaveChanges={handleSaveChanges} // Use handleUpdate here
                handleDelete={handleDelete} // Pass the handleDelete to the Modal
                movieDetails={movieDetails}
                setMovieDetails={setMovieDetails}
            />
        </BaseLayout>
    );
}

export default Home;