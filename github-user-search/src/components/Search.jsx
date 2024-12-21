// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [input, setInput] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (input.trim() !== '') {
            setUser(null);
            setError('');
            setLoading(true);

            try {
                const userData = await fetchUserData(input.trim());
                setUser(userData);
            } catch (err) {
                setError('Looks like we cant find the user');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={input}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <img src={user.avatar_url} alt={user.login} width={100} />
                    <p>Name: {user.name || 'N/A'}</p>
                    <p>GitHub Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit</a></p>
                </div>
            )}
        </div>
    );
};

export default Search;

// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_BASE_URL = process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
