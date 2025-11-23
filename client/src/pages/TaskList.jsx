import { useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";

const TaskList = () => {
  const { tasks, fetchTasks, createTask } = useTasks();
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = () => {
    if (!title.trim()) return;
    createTask({ title });
    setTitle("");
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Your Tasks</h1>

      <div className="flex gap-3 mb-6">
        <input
          className="flex-1 p-3 border rounded"
          placeholder="Add new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="px-5 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
