import { ApiUrls } from "../utils/constants.js";
import axiosClient from "./axiosClient.js";

export const taskApi = {
  getTasks: async () => {
    const res = await axiosClient.get(ApiUrls.TASKS);
    return res.data;
  },
  createTask: async (payload) => {
    const res = await axiosClient.post(ApiUrls.TASKS, payload);
    return res.data;
  },
  updateTask: async (id, payload) => {
    const res = await axiosClient.put(`${ApiUrls.TASKS}/${id}`, payload);
    return res.data;
  },

  deleteTask: async (id) => {
    const res = await axiosClient.delete(`${ApiUrls.TASKS}/${id}`);
    return res.data;
  },
};
