import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./theme";
import App from "./App";
import "./index.css";
import "./theme/variables.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
