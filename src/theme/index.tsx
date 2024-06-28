import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
