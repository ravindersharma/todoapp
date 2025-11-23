import Header from "../components/Header.jsx";
import { useEffect, useMemo } from "react";
import useTasks from "../hooks/useTasks.js";
import Loader from "../components/Loader.jsx";

const Dashboard = () => {
  const { tasks,loading , fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const completed = useMemo(
    () => tasks.filter((t) => t.completed).length,
    [tasks]
  );

  const pending = useMemo(
    () => tasks.filter((t) => !t.completed).length,
    [tasks]
  );


  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

        {loading  && <Loader />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold">Total Tasks</h2>
            <p className="text-4xl font-bold mt-2">{tasks.length}</p>
          </div>

          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold">Completed Tasks</h2>
            <p className="text-4xl font-bold mt-2 text-green-600">{completed}</p>
          </div>

          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold">Pending Tasks</h2>
            <p className="text-4xl font-bold mt-2 text-yellow-600">{pending}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
