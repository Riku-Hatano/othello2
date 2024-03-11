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
    scores: [] as string[],
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
      state.board = action.payload;
    },
    back: (state) => {
      if (state.boardHistory.length > 1) {
        state.boardHistory.pop();
        state.board = state.boardHistory[state.boardHistory.length - 1];
      }
    },
    addHistory: (state, action) => {
      state.boardHistory.push(action.payload);
    },
    addScore: (state, action) => {
      state.scores.push(action.payload);
    },
    removeScore: (state) => {
      state.scores.pop();
    },
  },
});

export const {
  putWhite,
  putBlack,
  play,
  changeTurn,
  updateBoard,
  back,
  addHistory,
  addScore,
  removeScore,
} = boardSlice.actions;
export default boardSlice.reducer;
