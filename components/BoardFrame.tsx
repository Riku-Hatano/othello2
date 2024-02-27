import { Grid } from "@mui/material";

const colArr = [1, 2, 3, 4, 5, 6, 7, 8];
const rowArr = ["a", "b", "c", "d", "e", "f", "g", "h"];

const BoardFrame = ({ children }: any) => {
  return (
    <Grid>
      <Grid sx={{ display: "flex" }}>
        {rowArr.map((item: any) => {
          return <Grid key={item}>{item}</Grid>;
        })}
      </Grid>
      <Grid>
        <Grid>
          {colArr.map((item: any) => {
            return <Grid key={item}>{item}</Grid>;
          })}
        </Grid>
        {children}
      </Grid>
    </Grid>
  );
};

export default BoardFrame;
