"use client";

import { Grid } from "@mui/material";
import HandleChange from "@/lib/handleChange";
import { useDispatch } from "react-redux";
import {
  putWhite,
  putBlack,
  changeTurn,
  updateBoard,
} from "@/redux/boardSlice";

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
const BaseCell = (props: any) => {
  const { children, onClick, id, id2, info, info2, info3 } = props;
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
      onClick={() => onClick(id, id2, info, info2, info3)}
    >
      {children}
    </Grid>
  );
};
const Disk = ({ color }: any) => {
  return (
    <Grid
      sx={{
        backgroundColor: color,
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
export const Cell = (props: any) => {
  switch (props.id3) {
    case "W":
      return (
        <BaseCell {...props}>
          <Disk color="white" />
        </BaseCell>
      );
    case "B":
      return (
        <BaseCell {...props}>
          <Disk color="black" />
        </BaseCell>
      );
    default:
      return <BaseCell {...props} />;
  }
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
      //クリックされた時、１盤面を変更する処理。２ターンを変更する処理、３盤面の履歴を保存する処理をdispatchで更新する必要がある。
      onClick={() => {
        dispatch(updateBoard(HandleChange(col, row, board)));
        board.mode === "PLAY" ? dispatch(changeTurn()) : null;
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
