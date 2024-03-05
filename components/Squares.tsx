"use client";

import { Grid } from "@mui/material";
import HandleChange from "@/lib/handleChange";
import { useDispatch } from "react-redux";
import {
  changeTurn,
  updateBoard,
  addHistory,
  addScore,
} from "@/redux/boardSlice";

const colArr = [1, 2, 3, 4, 5, 6, 7, 8];
const rowArr = ["a", "b", "c", "d", "e", "f", "g", "h"];

const cellSize = {
  xs: "30px",
  sm: "35px",
  md: "50px",
  lg: "60px",
};
const discSize = {
  xs: "28px",
  sm: "33px",
  md: "48px",
  lg: "58px",
};

export const InnerCell = ({
  children,
  col,
  row,
  board,
  bgColor = "green",
  color,
}: any) => {
  const dispatch = useDispatch();
  return (
    <Grid
      item
      sx={{
        backgroundColor: bgColor,
        color: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: {
          xs: cellSize.xs,
          sm: cellSize.sm,
          md: cellSize.md,
          lg: cellSize.lg,
        },
        height: {
          xs: cellSize.xs,
          sm: cellSize.sm,
          md: cellSize.md,
          lg: cellSize.lg,
        },
      }}
      onClick={() => {
        dispatch(addScore(`${colArr[col]} : ${rowArr[row]}`));
        dispatch(updateBoard(HandleChange(col, row, board).board));
        dispatch(addHistory(HandleChange(col, row, board).board));
        board.mode === "PLAY" && HandleChange(col, row, board).changeTurnFlag
          ? dispatch(changeTurn())
          : null;
      }}
    >
      {children}
    </Grid>
  );
};
const Piece = ({ color }: any) => {
  return (
    <Grid
      sx={{
        backgroundColor: color === "B" ? "black" : "white",
        borderRadius: "50%",
        width: {
          xs: discSize.xs,
          sm: discSize.sm,
          md: discSize.md,
          lg: discSize.lg,
        },
        height: {
          xs: discSize.xs,
          sm: discSize.sm,
          md: discSize.md,
          lg: discSize.lg,
        },
      }}
    />
  );
};
export const BaseCell = ({ board, col, row }: any) => {
  const color = board.board[col][row];
  return color !== " " ? (
    <InnerCell col={col} row={row} board={board}>
      <Piece color={color} />
    </InnerCell>
  ) : (
    <InnerCell col={col} row={row} board={board} />
  );
};
