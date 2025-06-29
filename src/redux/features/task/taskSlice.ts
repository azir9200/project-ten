import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: "amarid",
      title: "first ",
      description: "our details",
      dueDate: "2025-07-29",
      isComplete: false,
      priority: "High",
    },
    {
      id: "second idd",
      title: "second ",
      description: "our second details",
      dueDate: "2025-07-29",
      isComplete: false,
      priority: "High",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const selectSlice = (state: RootState) => {
  return state.todo.task;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
