import { Link, useLocation } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const logout = useLogout();
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  return (
    <header className="bg-white dark:bg-gray-900 shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link 
          to="/dashboard"
          className="text-xl font-semibold text-gray-800 dark:text-gray-200"
        >
          TaskManager
        </Link>

        <nav className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          {pathname.startsWith("/tasks") ? (
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          ) : (
            <Link to="/tasks" className="hover:underline">Tasks</Link>
          )}
        </nav>
      </div>

      <div className="flex items-center gap-4">
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
