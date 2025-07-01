import type { ITask } from "@/components/interface/Type";
import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [],
  // {
  //   id: "amar id",
  //   title: "first ",
  //   description: "our details",
  //   dueDate: "2025-07-29",
  //   isComplete: false,
  //   priority: "high",
  // },
  // {
  //   id: "second idd",
  //   title: "second ",
  //   description: "our second details",
  //   dueDate: "2025-07-29",
  //   isComplete: false,
  //   priority: "medium",
  // },
  // {
  //   id: "third idd",
  //   title: "third ",
  //   description: "our second details",
  //   dueDate: "2025-07-29",
  //   isComplete: false,
  //   priority: "low",
  // },

  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask } = taskSlice.actions;

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
