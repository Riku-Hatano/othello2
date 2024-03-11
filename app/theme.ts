import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#008000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 800,
      xl: 1200,
    },
  },
  spacing: [0, 1, 2, 4, 8],
});

export default theme;
