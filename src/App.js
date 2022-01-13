import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/pages/Hero/Hero";
import { GlobalStyle } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navbar />
                <Hero />
            </ThemeProvider>
        </>
    );
}

export default App;
