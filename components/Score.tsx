"use-client";

import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Score = () => {
  const scores = useSelector((state: any) => state.board.scores);
  useEffect(() => {
    console.log(scores);
  }, [scores]);
  return (
    <Grid
      sx={{
        backgroundColor: "gainsboro",
        padding: "10px",
        width: "100%",
        overflowY: "scroll",
        height: {
          md: "459px", //cell-size: 50px * 9 + borderBottom: 1px
          lg: "549px", //cell-size: 60px * 9 + borderBottom: 1px
        },
        margin: {
          xs: "20px 40px 0 0",
          md: "0 20px",
        },
      }}
    >
      {scores.map((score: string, idx: number) => (
        <Typography variant="body1" key={idx}>
          {`${idx + 1}: ${score}`}
        </Typography>
      ))}
    </Grid>
  );
};

export default Score;
