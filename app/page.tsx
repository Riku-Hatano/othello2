"use client";

import { ThemeButton } from "@/components/Button";
import { TestCell } from "@/components/Squares";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import theme from "./theme";
import { useDispatch } from "react-redux";
import { putWhite, putBlack, play, back } from "@/redux/boardSlice";
import BoardFrame from "@/components/BoardFrame";

export default function Home() {
  const board = useSelector((state: any) => state.board);
  const dispacth = useDispatch();

  return (
    <Grid>
      <BoardFrame sx={{ backgroundColor: "khaki", paddingY: "5vh" }}>
        <Grid
          container
          sx={{
            diaplay: "flex",
            rowGap: theme.spacing(1),
            backgroundColor: "black",
          }}
        >
          {board.board.map((col: any, colIdx: any) => {
            return (
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  columnGap: theme.spacing(1),
                  backgroundColor: "black",
                }}
                key={`${colIdx}`}
              >
                {col.map((row: any, rowIdx: any) => {
                  return (
                    <TestCell
                      key={`${rowIdx}-${colIdx}`}
                      board={board}
                      row={rowIdx}
                      col={colIdx}
                    />
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </BoardFrame>
      <Grid>
        <Typography variant="h4">
          next: {board.isWhiteTurn ? "WHITE" : "BLACK"}
        </Typography>
        <Typography>mode: {board.mode}</Typography>
      </Grid>
      <Grid>
        <ThemeButton onClick={() => dispacth(putWhite())}>
          edit white
        </ThemeButton>
        <ThemeButton onClick={() => dispacth(putBlack())}>
          edit black
        </ThemeButton>
        <ThemeButton onClick={() => dispacth(play())}>
          complete edit
        </ThemeButton>
        <ThemeButton onClick={() => dispacth(back())}>back</ThemeButton>
      </Grid>
    </Grid>
  );
}
