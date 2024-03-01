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
        sx={{
          display: "flex",
          columnGap: "1px",
          backgroundColor: "green",
          borderBottom: "1px solid green",
        }}
      >
        <React.Fragment>
          <TestBaseCell bgColor="black" />
          {rowArr.map((item: any) => {
            return (
              <TestBaseCell key={item} bgColor="black" color="green">
                {item}
              </TestBaseCell>
            );
          })}
        </React.Fragment>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <Grid
          sx={{
            backgroundColor: "green",
            flexDirection: "column",
            borderRight: "1px solid green",
            display: "flex",
            rowGap: "1px",
          }}
        >
          {colArr.map((item: any) => {
            return (
              <TestBaseCell key={item} bgColor="black" color="green">
                {item}
              </TestBaseCell>
            );
          })}
        </Grid>
        {children}
      </Grid>
    </Grid>
  );
};

export default BoardFrame;
