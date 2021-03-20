import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    status: "none",
  },
  reducers: {
    auth: (state) => {
      state.status = "auth";
    },
  },
});

export const { auth } = user.actions;
export default user.reducer;
