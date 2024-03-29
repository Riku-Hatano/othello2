"use client";

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "guest",
  },
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
