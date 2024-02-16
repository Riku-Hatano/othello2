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
    value: 0,
    amount: 0,
    mode: "PLAY",
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += parseInt(action.payload);
    },
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

export const {
  increment,
  decrement,
  incrementByAmount,
  putWhite,
  putBlack,
  play,
  changeTurn,
  updateBoard,
} = boardSlice.actions;
export default boardSlice.reducer;
