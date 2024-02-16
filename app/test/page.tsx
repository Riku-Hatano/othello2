"use client";

import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const Test = () => {
  const username = useSelector((state: any) => state.user.userName);
  return (
    <div>
      <h1>test</h1>
      <Grid
        sx={{
          backgroundColor: {
            xs: "red",
            sm: "blue",
            md: "green",
          },
        }}
      >
        <h2>{username}</h2>
      </Grid>
    </div>
  );
};

export default Test;
