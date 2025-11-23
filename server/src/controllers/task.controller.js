import Task from "../models/task.model.js";

/**
 * Create Task
 */
export const createTask = async (req, res, next) => {
  try {
    console.log("Incoming Task:", req.body, "User:", req.user);

    const task = await Task.create({
      ...req.body,
      user: req.user,      
    });

    res.json(task);
  } catch (error) {
    console.log("Create Task Error:", error);
    next(error);
  }
};

/**
 * Get all tasks for logged-in user
 */
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

/**
 * Update task
 */
export const updateTask = async (req, res, next) => {
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user },   
      { $set: req.body },                       
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ message: "Task not found or you are not authorized" });
    }

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete task
 */
export const deleteTask = async (req, res, next) => {
  try {
    const deleted = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Task not found or you are not authorized" });
    }

    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
