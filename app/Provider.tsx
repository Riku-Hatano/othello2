"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

export const ClientProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
