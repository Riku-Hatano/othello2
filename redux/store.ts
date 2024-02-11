"use client";

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import boardSlice from "./boardSlice";

export const store = configureStore({
  reducer: {
    board: boardSlice,
    user: userSlice,
  },
});
