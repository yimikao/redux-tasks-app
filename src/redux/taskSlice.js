import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: JSON.parse(localStorage.getItem("tasks"))
    ? JSON.parse(localStorage.getItem("tasks"))
    : [],

  reducers: {
    addTask: (state, actions) => {
      const task = {
        id: nanoid(),
        title: actions.payload.name,
        completed: false,
        dateAdded: new Date().toLocaleDateString,
      };

      return [task, ...state];
    },
    toggleTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = !state[index].completed;
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    deleteAllTasks: (state, action) => {
      return [];
    },
    deleteCompletedTasks: (state, action) => {
      return state.filter((task) => task.completed === false);
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  deleteAllTasks,
  deleteCompletedTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
