import { Dispatch, SetStateAction } from "react";

export default interface EntireState {
  loguser?: LogUser;
  game: Game;
  mode: "EDIT_WHITE" | "EDIT_BLACK" | "PLAY";
  setES: Dispatch<SetStateAction<EntireState>>;
}

interface LogUser {
  userName: string | null;
  userId: number | null;
  playLogs: PlayLog[]; //ログインユーザーの棋譜を保存する型。あとで定義する
}

interface Game {
  board: Board;
  boardHistory: Board[];
  turn: "WHITE" | "BLACK" | null;
}

type Board = Cell[][];

export type Cell = "white" | "black" | null;

interface PlayLog {
  log: any;
}
