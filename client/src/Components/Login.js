import React, { useState, useContext } from 'react'; // Import useContext here
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';  // Import the AuthContext (not AuthContextProvider)

import { apiService } from '../Helpers/apiService'; 

import '../Login.css';  // Import the CSS file here



const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);  // Use the useContext hook to access the AuthContext values

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiService.post('/authenticate/login', {
                name,
                password
            });
            const { token } = response.data;
            login(token);  // Use the login function to update the global context
            navigate('/');  // Redirect to the home page
        } catch (err) {
            console.error(err);
            const errorMessage = err.response && err.response.data ? err.response.data.message : err.message;
            setError('Invalid name or password: ' + errorMessage);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
