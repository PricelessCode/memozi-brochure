import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/pages/Hero/Hero";
import { GlobalStyle } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Service from "./components/pages/Services/Service";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navbar />
                <Hero />
                <Service />
            </ThemeProvider>
        </>
    );
}

export default App;
