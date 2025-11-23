// src/components/AdvancedSearch.jsx
import { useState, useEffect } from "react";
import { searchUsers } from "../services/githubService";

export default function AdvancedSearch() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = 30;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // perform a fresh search (page = 1)
  const doSearch = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError("");
    setPage(1);
    setResults([]);
    try {
      const { total_count, items } = await searchUsers({
        username,
        location,
        minRepos: minRepos ? Number(minRepos) : 0,
        page: 1,
        per_page: perPage,
      });
      setResults(items);
      setTotalCount(total_count);
    } catch (err) {
      setError("Search failed");
    } finally {
      setLoading(false);
    }
  };

  // load next page and append
  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    setError("");
    try {
      const { items } = await searchUsers({
        username,
        location,
        minRepos: minRepos ? Number(minRepos) : 0,
        page: nextPage,
        per_page: perPage,
      });
      setResults((prev) => [...prev, ...items]);
      setPage(nextPage);
    } catch (err) {
      setError("Could not load more results");
    } finally {
      setLoading(false);
    }
  };

  // helper to show user details minimal (note: search/users response contains limited fields; for repo count or location you may need to fetch user details individually)
  // For now we display the available fields: login, avatar_url, html_url
  return (
    <div className="max-w-3xl mx-auto p-6">
      <form onSubmit={doSearch} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Name / Login</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. tom" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. Ghana" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Min repos</label>
          <input value={minRepos} onChange={(e) => setMinRepos(e.target.value)} type="number" min="0" className="w-full border rounded px-3 py-2" placeholder="e.g. 10" />
        </div>

        <div className="md:col-span-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Search</button>
        </div>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <p className="text-sm text-gray-600 mb-3">Total matches: {totalCount}</p>

        <div className="space-y-4">
          {results.length === 0 && !loading && <p>No results yet. Try different filters.</p>}

          {results.map((user) => (
            <div key={user.id} className="flex gap-4 items-center border rounded p-3">
              <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{user.login}</h3>
                    <a href={user.html_url} target="_blank" className="text-blue-600 text-sm">Profile</a>
                  </div>
                  <div className="text-sm text-gray-500">Score: {Math.round(user.score || 0)}</div>
                </div>
                {/* Note: search API result doesn't include location/repo counts; you can fetch more user details on click */}
              </div>
            </div>
          ))}
        </div>

        {results.length > 0 && results.length < totalCount && (
          <div className="mt-6 text-center">
            <button onClick={loadMore} className="bg-gray-800 text-white px-4 py-2 rounded">Load more</button>
          </div>
        )}
      </div>
    </div>
  );
}
