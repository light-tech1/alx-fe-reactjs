// src/App.jsx
import { useState } from "react";
import BasicSearch from "./components/BasicSearch";
import AdvancedSearch from "./components/AdvancedSearch";

function App() {
  const [mode, setMode] = useState("basic"); // 'basic' or 'advanced'

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h1 className="text-2xl font-bold">GitHub User Search</h1>
          <p className="text-sm text-gray-600">Choose Basic or Advanced search</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode("basic")}
            className={`px-4 py-2 rounded ${mode === "basic" ? "bg-blue-600 text-white" : "bg-white border"}`}
          >
            Basic Search
          </button>
          <button
            onClick={() => setMode("advanced")}
            className={`px-4 py-2 rounded ${mode === "advanced" ? "bg-green-600 text-white" : "bg-white border"}`}
          >
            Advanced Search
          </button>
        </div>

        {mode === "basic" ? <BasicSearch /> : <AdvancedSearch />}
      </main>
    </div>
  );
}

export default App;
