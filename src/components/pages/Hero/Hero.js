import React from "react";
import styled from "styled-components";

const data = {
    Slogan: "Learn faster with Memozi",
    CTA: "Sign Up Now!",
};

const HeroSection = styled.div`
    background: red;
    height: 60vh;
`;

const HeroContainer = styled.div`
    overflow: hidden;
`;

const HeroTextWrapper = styled.div``;

const HeroImageWrapper = styled.div``;

const CTAWrapper = styled.div``;

const Wave = styled.svg`
    stroke-opacity: 0;
`;

const WavePath = styled.path`
    fill: red;
`;

function Hero() {
    return (
        <>
            <HeroSection>
                <HeroContainer>
                    <HeroTextWrapper>
                        <h4>{data.Slogan}</h4>
                    </HeroTextWrapper>
                    <HeroImageWrapper></HeroImageWrapper>
                    <CTAWrapper>
                        <button>Play store</button>
                        <button>App Store</button>
                    </CTAWrapper>
                </HeroContainer>
            </HeroSection>
            <Wave viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <WavePath d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></WavePath>
            </Wave>
        </>
    );
}

export default Hero;
