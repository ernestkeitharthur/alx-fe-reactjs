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
