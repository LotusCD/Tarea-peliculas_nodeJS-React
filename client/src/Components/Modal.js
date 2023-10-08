import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export const ModalComponent = ({ 
    show, 
    handleClose, 
    title, 
    handleSaveChanges, 
    handleDelete,
    movieDetails,
    setMovieDetails
}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formMovieTitle">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter movie title" 
                            value={movieDetails.title || ''}
                            onChange={(e) => setMovieDetails(prevState => ({
                                ...prevState,
                                title: e.target.value
                            }))}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="formMovieDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Enter description" 
                            value={movieDetails.plot || ''}
                            onChange={(e) => setMovieDetails(prevState => ({
                                ...prevState,
                                plot: e.target.value
                            }))}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};



export default ModalComponent;


export const AddMovieModal = ({ 
    show, 
    handleClose, 
    handleAddMovie,
    newMovieDetails,
    setNewMovieDetails
}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formMovieTitle">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter movie title" 
                            value={newMovieDetails.title || ''}
                            onChange={(e) => setNewMovieDetails(prevState => ({
                                ...prevState,
                                title: e.target.value
                            }))}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMovieYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Enter year of release" 
                            value={newMovieDetails.year || ''}
                            onChange={(e) => setNewMovieDetails(prevState => ({
                                ...prevState,
                                year: parseInt(e.target.value)
                            }))}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMovieGenres">
                        <Form.Label>Genres</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter genres separated by commas" 
                            value={newMovieDetails.genres ? newMovieDetails.genres.join(', ') : ''}
                            onChange={(e) => setNewMovieDetails(prevState => ({
                                ...prevState,
                                genres: e.target.value.split(',').map(genre => genre.trim())
                            }))}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMovieDirectors">
                        <Form.Label>Directors</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter directors separated by commas" 
                            value={newMovieDetails.directors ? newMovieDetails.directors.join(', ') : ''}
                            onChange={(e) => setNewMovieDetails(prevState => ({
                                ...prevState,
                                directors: e.target.value.split(',').map(director => director.trim())
                            }))}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMovieProductionCompany">
                        <Form.Label>Production Company</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter production company name" 
                            value={newMovieDetails.productionCompany || ''}
                            onChange={(e) => setNewMovieDetails(prevState => ({
                                ...prevState,
                                productionCompany: e.target.value
                            }))}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMovieType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter type (e.g., movie, series)" 
                            value={newMovieDetails.type || ''}
                            onChange={(e) => setNewMovieDetails(prevState => ({
                                ...prevState,
                                type: e.target.value
                            }))}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMoviePoster">
                        <Form.Label>Movie Poster (URL)</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter URL of the movie poster" 
                            value={newMovieDetails.poster || ''}
                            onChange={(e) => setNewMovieDetails(prevState => ({
                                ...prevState,
                                poster: e.target.value
                            }))}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMoviePlot">
                        <Form.Label>Movie Plot</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter the plot" 
                            value={newMovieDetails.plot || ''}
                            onChange={(e) => setNewMovieDetails(prevState => ({
                                ...prevState,
                                plot: e.target.value
                            }))}
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddMovie}>
                    Add Movie
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
