import { Grid } from "@mui/material";
import { TestBaseCell } from "./Squares";
import theme from "@/app/theme";
import React from "react";

const colArr = [1, 2, 3, 4, 5, 6, 7, 8];
const rowArr = ["a", "b", "c", "d", "e", "f", "g", "h"];

const BoardFrame = ({ children }: any) => {
  return (
    <Grid>
      <Grid
        container
        sx={{ display: "flex", columnGap: "1px", backgroundColor: "black" }}
        spacing={theme.spacing(1)}
      >
        <React.Fragment>
          <TestBaseCell />
          {rowArr.map((item: any) => {
            return <TestBaseCell key={item}>{item}</TestBaseCell>;
          })}
        </React.Fragment>
      </Grid>
      {/* <Grid> */}
      <Grid sx={{ display: "flex" }}>
        <Grid
          sx={{
            backgroundColor: "black",
            flexDirection: "column",
            justifyContent: "flex-end",
            display: "flex",
            rowGap: "1px",
          }}
        >
          {colArr.map((item: any) => {
            return <TestBaseCell key={item}>{item}</TestBaseCell>;
          })}
        </Grid>
        {children}
      </Grid>
    </Grid>
  );
};

export default BoardFrame;
