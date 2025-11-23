import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

export async function fetchUserData(username) {
  try {
    const headers = {};

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
}
