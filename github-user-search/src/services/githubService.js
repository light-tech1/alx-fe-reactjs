import axios from "axios";

// Accepts optional location and minRepos
export async function fetchUserData({ username, location, minRepos }) {
  if (!username) return [];

  let query = `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=20`;

  const response = await axios.get(url);

  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return users;
}
