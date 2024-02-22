"use client";

import { Grid } from "@mui/material";
import HandleChange from "@/lib/handleChange";
import { useDispatch } from "react-redux";
import { changeTurn, updateBoard, addHistory } from "@/redux/boardSlice";

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

const TestBaseCell = ({ children, col, row, board }: any) => {
  const dispatch = useDispatch();
  return (
    <Grid
      item
      sx={{
        backgroundColor: "green",
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
        dispatch(updateBoard(HandleChange(col, row, board).board));
        dispatch(addHistory(HandleChange(col, row, board).board));
        board.mode === "PLAY" && HandleChange(col, row, board).flag
          ? dispatch(changeTurn())
          : null;
      }}
    >
      {children}
    </Grid>
  );
};
const TestDisk = ({ color }: any) => {
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
export const TestCell = ({ board, col, row }: any) => {
  const color = board.board[col][row];
  return color !== " " ? (
    <TestBaseCell col={col} row={row} board={board}>
      <TestDisk color={color} />
    </TestBaseCell>
  ) : (
    <TestBaseCell col={col} row={row} board={board} />
  );
};
