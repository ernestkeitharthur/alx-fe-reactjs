// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetch users from GitHub API based on search criteria.
 * @param {Object} params - Search parameters.
 * @param {string} params.username - Username to search.
 * @param {string} [params.location] - Location of the user.
 * @param {number} [params.minRepos] - Minimum number of repositories.
 * @returns {Promise<Object>} The search result.
 */
export const fetchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = `q=${encodeURIComponent(username)}`;

    if (location) {
      query += `+location:${encodeURIComponent(location)}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
