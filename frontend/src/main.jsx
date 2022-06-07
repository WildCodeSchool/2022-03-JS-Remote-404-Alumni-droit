import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#862628",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      <ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
