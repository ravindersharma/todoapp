import { useDispatch, useSelector } from "react-redux";
import { taskApi } from "../api/taskApi.js";
import { setTasks, addTask, updateTask, removeTask } from "../store/taskSlice";
import { useState } from "react";
const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
 const [loading, setLoading] = useState(false);
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await taskApi.getTasks();
      dispatch(setTasks(data));
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false); 
    }
  };

  const createTask = async (task) => {
    const data = await taskApi.createTask(task);
    dispatch(addTask(data));
  };

  const updateTaskFn = async (id, task) => {
    const data = await taskApi.updateTask(id, task);
    dispatch(updateTask(data));
  };

  const deleteTaskFn = async (id) => {
    await taskApi.deleteTask(id);
    dispatch(removeTask(id));
  };

  return { tasks,loading, fetchTasks, createTask, updateTaskFn, deleteTaskFn};
};

export default useTasks;
