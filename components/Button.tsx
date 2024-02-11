import styled from "@emotion/styled";
import { Button } from "@mui/material";
import theme from "@/app/theme";

export const ThemeButton = styled(Button)(() => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));
