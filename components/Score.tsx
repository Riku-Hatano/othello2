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
        width: "100%",
        margin: {
          xs: "20px 40px 0 0",
          md: "0 20px",
        },
      }}
    >
      {scores.map((score: string, idx: number) => (
        <Typography variant="body1" key={idx}>
          {score}
        </Typography>
      ))}
    </Grid>
  );
};

export default Score;

// import { Grid, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// const Score = () => {
//   const scores = useSelector((state: any) => state.board.scores);

//   useEffect(() => {
//     console.log(scores);
//   }, [scores]);

//   return (
//     <Grid
//       sx={{
//         backgroundColor: "gainsboro",
//         width: "100%",
//         margin: {
//           xs: "20px 40px 0 0",
//           md: "0 20px",
//         },
//       }}
//     >
//       {scores.map((score: string, index: number) => (
//         <Typography key={index} variant="body1">{score}</Typography>
//       ))}
//     </Grid>
//   );
// };

// export default Score;
