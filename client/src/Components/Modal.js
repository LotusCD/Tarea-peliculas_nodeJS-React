import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalComponent = ({ 
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
