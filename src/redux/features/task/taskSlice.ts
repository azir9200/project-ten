import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    title: "first ",
    description: "our details",
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});
export default taskSlice.reducer;
