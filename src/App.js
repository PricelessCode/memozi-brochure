import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/pages/Hero/Hero";
import { GlobalStyle } from "./globalStyles";

function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Hero />
            <div>sfsdf</div>
        </>
    );
}

export default App;
