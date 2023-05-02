import { ThemeProvider } from "@mui/system";
import React from "react";
import "./App.css";
import WelcomeDashBoard from "./pages/WelcomeDashBoard";
import theme from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WelcomeDashBoard />
    </ThemeProvider>
  );
}

export default App;
