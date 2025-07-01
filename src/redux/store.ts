import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import { quizSlice } from "./features/quiz/quizSlice";

export const store = configureStore({
  reducer: {
    todo: taskReducer,
    quiz: quizSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
