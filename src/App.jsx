import React from "react";
import About from "./About";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Fragment } from "react";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      helper: "#212529",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243",
      border: "rgba(98, 84, 243, 0.6)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

// Style Component
// -> theme.provider
// -> Create a const theme
