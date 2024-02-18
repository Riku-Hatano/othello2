"use client";

import { createSlice } from "@reduxjs/toolkit";
import initialState from "@/app/initialStates/initialState";
import boardInitializer from "@/app/initialStates/boardInitializer";

const initialBoard = boardInitializer();

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: initialBoard,
    boardHistory: [initialBoard],
    isWhiteTurn: true,
    amount: 0,
    mode: "PLAY",
  },
  reducers: {
    putWhite: (state) => {
      state.mode = "EDIT_WHITE";
    },
    putBlack: (state) => {
      state.mode = "EDIT_BLACK";
    },
    play: (state) => {
      state.mode = "PLAY";
    },
    changeTurn: (state) => {
      state.isWhiteTurn = !state.isWhiteTurn;
    },
    updateBoard: (state, action) => {
      console.log(action.payload);
      state.board = action.payload;
    },
  },
});

export const { putWhite, putBlack, play, changeTurn, updateBoard } =
  boardSlice.actions;
export default boardSlice.reducer;
