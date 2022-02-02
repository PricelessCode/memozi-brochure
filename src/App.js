import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/pages/Hero/Hero";
import { GlobalStyle } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Service from "./components/pages/Services/Service";
import Footer from "./components/pages/Footer/Footer.js"
import Counter from "./components/pages/Counter/Counter";
import Testimonials from "./components/pages/Testimonials/Testimonials";
import Subscribe from "./components/pages/Subscribe/Subscribe";
import Detail from "./components/pages/Detail/Detail";
import { flashCardDetail, mentorDetail, classDetail } from "./components/pages/Detail/Data";


function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navbar />
                <Hero /> 
                <Service />
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...mentorDetail} highlightColor={theme.colors.green}/>
                <Detail {...classDetail} highlightColor={theme.colors.violet}/>
                <Testimonials />
                <Counter />
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                <Detail {...flashCardDetail} highlightColor={theme.colors.red}/>
                
                <Subscribe />
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default App;
