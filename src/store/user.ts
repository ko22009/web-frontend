import { createSlice } from "@reduxjs/toolkit";

const localStore = localStorage.getItem("user");
export const token = localStore ? JSON.parse(localStore).token : null;

export const user = createSlice({
  name: "user",
  initialState: {
    active: !!token,
    token: token,
  },
  reducers: {
    auth: (state, action) => {
      const token = action.payload.message.token;
      localStorage.setItem("user", JSON.stringify({ token }));
      state.active = !!token;
      state.token = token;
      return state;
    },
  },
});

export const { auth } = user.actions;

export default user.reducer;
