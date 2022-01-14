import React from "react";
import { IoIosFlash } from "react-icons/io";
import styled from "styled-components";
import studyImg from "../../../asset/casual-life-3d-reading.png";

const heroColor = ({ theme }) => theme.colors.blueberry;
const navyColor = ({ theme }) => theme.colors.navy;
const whiteColor = ({ theme }) => theme.colors.white;

const data = {
    heroMessage: "Memorize and Learn like thunder",
    CTAMessage:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    CTAButtonText: "Get Started",
};

const breakPoint = "955px";

const HeroSection = styled.div`
    padding: 160px 0;
    background: ${heroColor};
    height: 45vh;
`;

const HeroContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: center;
    flex-wrap: wrap;
`;

const Row = styled.div`
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: stretch;
`;

const Col = styled.div`
    margin-bottom: 15px;
    padding-right: 20px;
    padding-left: 20px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
`;

const HeroTextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
    max-width: 600px;
`;

const HeroImageWrapper = styled.div`
`;

const HeroMessage = styled.h1`
    color: ${whiteColor};
    font-size: 60px;
    margin-bottom: 30px;
`;

const HeroImage = styled.img`
    margin-top: 0;
    margin-right: 0;
    margin-left: 10px;
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`;

const CTAMessage = styled.h4`
    color: ${whiteColor};
    margin-bottom: 50px;
`;

const CTAWrapper = styled.div``;

const CTAButton = styled.button`
    background: transparent;
    color: ${whiteColor};
    font-size: 14px;
    border-color: ${whiteColor};
    border-style: solid;
    border-width: 2px;
    border-radius: 22px;
    padding: 10px 40px;
    text-transform: uppercase;
    transition: all 0.2s linear;

    &:hover {
        background: ${navyColor};
        cursor: pointer;
        border-color: ${navyColor};
        transition: all 0.2s linear;
    }
`;

const Wave = styled.svg`
    stroke-opacity: 0;
`;

const WavePath = styled.path`
    fill: ${heroColor};
`;

function Hero() {
    return (
        <>
            <HeroSection>
                <HeroContainer>
                    <Row>
                        <Col>
                            <HeroTextWrapper>
                                <HeroMessage>
                                    {data.heroMessage}
                                    <IoIosFlash color="yellow" />
                                </HeroMessage>
                                <CTAWrapper>
                                    <CTAMessage>{data.CTAMessage}</CTAMessage>
                                    <CTAButton>{data.CTAButtonText}</CTAButton>
                                </CTAWrapper>
                            </HeroTextWrapper>
                        </Col>
                        <Col>
                            <HeroImageWrapper>
                                <HeroImage src={studyImg} alt="Study Image" />
                            </HeroImageWrapper>
                        </Col>
                    </Row>
                </HeroContainer>
            </HeroSection>
            <Wave viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <WavePath d="M0,50 C100,150 250,0 500,70 L500,00 L0,0 Z"></WavePath>
            </Wave>
        </>
    );
}

export default Hero;
