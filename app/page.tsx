"use client";

import { ThemeButton } from "@/components/Button";
import { BaseCell } from "@/components/Squares";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import theme from "./theme";
import { useDispatch } from "react-redux";
import {
  putWhite,
  putBlack,
  play,
  back,
  removeScore,
  changeTurn,
} from "@/redux/boardSlice";
import BoardFrame from "@/components/BoardFrame";
import Score from "@/components/Score";
import TestButton from "@/components/TestButton";

export default function Home() {
  const board = useSelector((state: any) => state.board);
  const dispatch = useDispatch();

  return (
    <Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <BoardFrame>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "1px",
              backgroundColor: "black",
            }}
          >
            {board.board.map((col: any, colIdx: any) => {
              return (
                <Grid
                  sx={{
                    display: "flex",
                    columnGap: "1px",
                  }}
                  key={`${colIdx}`}
                >
                  {col.map((row: any, rowIdx: any) => {
                    return (
                      <BaseCell
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
        <Score />
      </Grid>
      <Grid>
        <Typography variant="h4">
          next: {board.isWhiteTurn ? "WHITE" : "BLACK"}
        </Typography>
        <Typography>mode: {board.mode}</Typography>
      </Grid>
      <Grid>
        <ThemeButton onClick={() => dispatch(putWhite())}>
          edit white
        </ThemeButton>
        <ThemeButton onClick={() => dispatch(putBlack())}>
          edit black
        </ThemeButton>
        <ThemeButton onClick={() => dispatch(play())}>
          complete edit
        </ThemeButton>
        <ThemeButton
          onClick={() => {
            dispatch(back());
            dispatch(changeTurn());
            dispatch(removeScore());
          }}
        >
          back
        </ThemeButton>
      </Grid>
      <TestButton />
    </Grid>
  );
}
