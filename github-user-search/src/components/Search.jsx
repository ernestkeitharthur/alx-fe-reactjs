// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setResults([]);
        setError('');
        setLoading(true);

        try {
            const query = `${username ? `user:${username}` : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`.trim();
            const userData = await fetchAdvancedUserData(query);
            setResults(userData);
        } catch (err) {
            setError('No results found or an error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <form onSubmit={handleFormSubmit} className="bg-white p-4 shadow-md rounded-md max-w-lg mx-auto space-y-4">
                <div>
                    <label htmlFor="username" className="block text-gray-700 font-medium">GitHub Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter GitHub username"
                        value={username}
                        onChange={(e) => handleInputChange(e, setUsername)}
                        className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-gray-700 font-medium">Location</label>
                    <input
                        id="location"
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => handleInputChange(e, setLocation)}
                        className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    />
                </div>
                <div>
                    <label htmlFor="minRepos" className="block text-gray-700 font-medium">Minimum Repositories</label>
                    <input
                        id="minRepos"
                        type="number"
                        placeholder="Enter minimum repos count"
                        value={minRepos}
                        onChange={(e) => handleInputChange(e, setMinRepos)}
                        className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Search
                </button>
            </form>

            {loading && <p className="text-center text-blue-500 mt-4">Loading...</p>}
            {error && <p className="text-center text-red-500 mt-4">{error}</p>}
            {results.length > 0 && (
                <div className="mt-6 space-y-4">
                    {results.map((user) => (
                        <div key={user.id} className="bg-white p-4 shadow-md rounded-md">
                            <div className="flex items-center space-x-4">
                                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                                <div>
                                    <p className="text-lg font-medium">{user.login}</p>
                                    <p className="text-sm text-gray-600">Location: {user.location || 'N/A'}</p>
                                    <p className="text-sm text-gray-600">Repos: {user.public_repos || 0}</p>
                                    <a
                                        href={user.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;

// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_BASE_URL = process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com';

export const fetchAdvancedUserData = async (query) => {
    try {
        const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
        return response.data.items;
    } catch (error) {
        throw error.response;
    }
};
