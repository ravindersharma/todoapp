import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    updateTask(state, action) {
      const i = state.tasks.findIndex((t) => t._id === action.payload._id);
      if (i !== -1) state.tasks[i] = action.payload;
    },
    removeTask(state, action) {

      const id = action.payload;
      state.tasks = state.tasks.filter((t) => t._id !== id);
    },
  },
});

export const { setTasks, addTask, updateTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
