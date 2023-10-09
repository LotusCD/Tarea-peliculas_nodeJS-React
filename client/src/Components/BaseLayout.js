import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AddMovieModal } from './Modal';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Make sure to provide the correct path to AuthContext.js

const Navbar = ({ onAddMovieClick, isLoggedIn, handleLogout }) => (
    <div className="navbar container">
        {/* Logo Image */}
        <Link to="/">
            <img src="./logo.png" alt="Logo" className="navbar-logo" />
        </Link>
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">APPeliculas</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Genero">Genero</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Director">Director</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Otros
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" onClick={onAddMovieClick}>Agregar pelicula</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/Login"
                                onClick={isLoggedIn ? handleLogout : null}
                            >
                                {isLoggedIn ? 'Logout' : 'Login'}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

const BaseLayout = ({ children }) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [newMovieDetails, setNewMovieDetails] = useState({
        title: "",
        year: null,
        genres: [],
        directors: [],
        productionCompany: "",
        type: ""
    });

    const { authToken, isLoggedIn, logout } = useAuth();  // Get the authToken, isLoggedIn, and logout function using the useAuth hook

    const handleLogout = () => {
        logout();  // Call the logout function from AuthContext to remove the token
    };

    const handleAddMovie = () => {
        axios.post('http://localhost:5000/movies', newMovieDetails, {
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        })
        .then(response => {
            console.log("Movie added successfully:", response.data);
            setShowAddModal(false);
            // You might want to re-fetch data or do some other action
        })
        .catch(error => {
            console.error("Error adding movie:", error);
        });
    };
    return (
        <>
            <Navbar 
                onAddMovieClick={() => setShowAddModal(true)} 
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
            />
            <main id="app">
                {children}
            </main>
            <AddMovieModal 
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
                newMovieDetails={newMovieDetails}
                setNewMovieDetails={setNewMovieDetails}
                handleAddMovie={handleAddMovie}
            />
            {/* Bootstrap script and any other necessary scripts ... */}
        </>
    );
};

export default BaseLayout;
