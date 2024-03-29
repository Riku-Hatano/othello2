import { Grid } from "@mui/material";
import { InnerCell } from "./Squares";
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
          backgroundColor: theme.palette.secondary.main,
          width: "fit-content",
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        }}
      >
        <React.Fragment>
          <InnerCell bgColor={theme.palette.primary.main} />
          {rowArr.map((item: any) => {
            return (
              <InnerCell
                key={item}
                bgColor={theme.palette.primary.main}
                color={theme.palette.secondary.main}
              >
                {item}
              </InnerCell>
            );
          })}
        </React.Fragment>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <Grid
          sx={{
            backgroundColor: theme.palette.secondary.main,
            flexDirection: "column",
            borderRight: `1px solid ${theme.palette.secondary.main}`,
            display: "flex",
            rowGap: "1px",
          }}
        >
          {colArr.map((item: any) => {
            return (
              <InnerCell
                key={item}
                bgColor={theme.palette.primary.main}
                color={theme.palette.secondary.main}
              >
                {item}
              </InnerCell>
            );
          })}
        </Grid>
        {children}
      </Grid>
    </Grid>
  );
};

export default BoardFrame;
