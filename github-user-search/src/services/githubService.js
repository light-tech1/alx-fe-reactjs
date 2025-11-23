// src/services/githubService.js
import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN || null;

const getHeaders = () => {
  const headers = { Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
};

// Fetch single user (Basic search)
export async function fetchUserData(username) {
  if (!username) throw new Error("No username provided");
  try {
    const response = await axios.get(`https://api.github.com/users/${encodeURIComponent(username)}`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (err) {
    throw new Error("User not found");
  }
}

// Advanced search (search/users?q={query}&page={page}&per_page={per_page})
// params: { username, location, minRepos, page, per_page }
export async function searchUsers({ username = "", location = "", minRepos = 0, page = 1, per_page = 30 }) {
  try {
    // build q string parts
    const parts = [];

    if (username.trim()) {
      // treat username as a general term to match login/name
      parts.push(encodeURIComponent(username.trim()));
    }

    if (location.trim()) {
      parts.push(`location:${encodeURIComponent(location.trim())}`);
    }

    if (minRepos && Number(minRepos) > 0) {
      parts.push(`repos:>${Number(minRepos)}`);
    }

    // GitHub requires at least one q term; if none provided, search all users (use a neutral term)
    const q = parts.length > 0 ? parts.join("+") : "type:user";

    const url = `https://api.github.com/search/users?q=${q}&page=${page}&per_page=${per_page}`;

    const response = await axios.get(url, { headers: getHeaders() });

    // response.data has { total_count, items: [ ...users ] }
    return {
      total_count: response.data.total_count,
      items: response.data.items,
    };
  } catch (err) {
    throw new Error("Search failed");
  }
}
