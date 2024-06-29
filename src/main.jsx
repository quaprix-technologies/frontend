import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./theme";
import App from "./App";
import "./index.css";
import "./theme/variables.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
