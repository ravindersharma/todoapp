import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const logout = useLogout();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow p-4 flex items-center justify-between">
      
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <Link 
          to="/dashboard"
          className="text-xl font-semibold text-gray-800 dark:text-gray-200"
        >
          TaskManager
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <Link to="/tasks" className="hover:underline">Tasks</Link>
          <Link to="/tasks/create" className="hover:underline">Create Task</Link>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
