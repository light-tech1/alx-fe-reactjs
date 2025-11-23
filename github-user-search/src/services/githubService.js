import axios from "axios";

// Accepts optional location and minRepos
export async function fetchUsers({ username, location, minRepos }) {
  if (!username) return [];

  // Construct query string
  let query = `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=20`;

  const response = await axios.get(url);

  // Fetch extra user info for each user
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return users;
}
