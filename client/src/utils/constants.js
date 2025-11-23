// API base URL (auto-selects based on environment)
export const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Common status codes / labels
export const TASK_STATUS = {
  COMPLETED: "completed",
  PENDING: "pending",
};

// Toast messages
export const MESSAGES = {
  LOGIN_SUCCESS: "Logged in successfully!",
  REGISTER_SUCCESS: "Account created successfully!",
  TASK_ADDED: "Task added!",
  TASK_UPDATED: "Task updated!",
  TASK_DELETED: "Task deleted!",
  ERROR_GENERIC: "Something went wrong",
};

// UI values
export const UI = {
  APP_NAME: "Task Manager",
  LIGHT_THEME: "light",
  DARK_THEME: "dark",
};

export const ApiUrls = {
  AUTH_REGISTER: "/auth/register",
  AUTH_LOGIN: "/auth/login",
  TASKS: "/tasks",
};

export const LocalStore = {
  THEME: "theme",
  TOKEN: "token",
};
