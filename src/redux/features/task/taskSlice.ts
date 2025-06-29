import type { ITask } from "@/components/interface/Type";
import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  tasks: ITask[];
}

const initialState = {
  task: [
    {
      id: "amar id",
      title: "first ",
      description: "our details",
      dueDate: "2025-07-29",
      isComplete: false,
      priority: "high",
    },
    {
      id: "second idd",
      title: "second ",
      description: "our second details",
      dueDate: "2025-07-29",
      isComplete: false,
      priority: "medium",
    },
    {
      id: "third idd",
      title: "third ",
      description: "our second details",
      dueDate: "2025-07-29",
      isComplete: false,
      priority: "low",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.task;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
