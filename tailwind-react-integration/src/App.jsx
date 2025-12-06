import UserProfile from "./components/UserProfile";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Task 0 */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mt-20">
        Tailwind CSS v4 is working! 🎉
      </h1>

      {/* Task 1 + Task 2 */}
      <div className="mt-16">
        <UserProfile />
      </div>
    </div>
  );
}
