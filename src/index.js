import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./components/App/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme } from "@mui/material/styles";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
