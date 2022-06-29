import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import ExportContextUser from "./contexts/UserContext";

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
    <ExportContextUser.UserProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ExportContextUser.UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
