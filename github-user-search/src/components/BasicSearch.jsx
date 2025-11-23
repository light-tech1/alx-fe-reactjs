// src/components/BasicSearch.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function BasicSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex gap-2 items-center justify-center">
        <input
          className="border rounded px-3 py-2 w-72"
          type="text"
          placeholder="GitHub username (e.g. octocat)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Search</button>
      </form>

      <div className="mt-6 text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {user && (
          <div className="mt-4 inline-block text-left border rounded p-4 shadow">
            <div className="flex items-center gap-4">
              <img src={user.avatar_url} alt="avatar" className="w-20 h-20 rounded-full" />
              <div>
                <h2 className="text-lg font-bold">{user.name || user.login}</h2>
                <p className="text-sm text-gray-600">@{user.login}</p>
                {user.location && <p className="text-sm">{user.location}</p>}
                <a className="text-blue-600 underline mt-1 inline-block" href={user.html_url} target="_blank">View Profile</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
