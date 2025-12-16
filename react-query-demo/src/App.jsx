import React from "react";
import PostsComponent from "./components/PostsComponent.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
