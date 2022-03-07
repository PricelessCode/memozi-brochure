import React from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";

const CardContainer = styled.div`
    overflow: hidden;
    position: absolute;
    border-radius: 20px;
    display: ${(props) => props.display};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s ease-out;
    transform: rotateY(${({ offset }) => offset * 50}deg)
        scaleY(${({ offset }) => 1 + Math.abs(offset) * -0.4})
        translateX(${({ offset }) => (offset / Math.abs(offset)) * -8}rem)
        translateZ(${({ offset }) => Math.abs(offset) * -30}rem);
    filter: blur(${({ offset }) => Math.abs(offset) / 2}rem);
`;

const TestimonialBody = styled.div`
    padding: 40px 40px 80px;
    width: 100%;
    background-color: hsl(
        280deg,
        30%,
        calc(100% - ${({ offset }) => Math.abs(offset)} * 50%)
    );
`;

const TestimonialContent = styled.p`
    color: #555;
    font-size: 20px;
    line-height: 30px;
`;

const StyledFaQuoteRight = styled(FaQuoteRight)`
    color: #555;
    float: right;
    font-size: 30px;
`;

const TestimonialFooter = styled.div`
    background: ${({ theme }) => {
        return theme.colors.blueberry;
    }};

    color: white;
    text-align: center;
    padding: 40px;
`;

const ProfileImage = styled.img`
    height: 120px;
    width: 120px;
    margin-top: -100px;
    object-fit: cover;
    object-position: 0 10%;
    border-radius: 50%;
    border: 3px solid #fff;
`;

const Name = styled.h3`
    text-transform: uppercase;
    margin: 10px 0;
    letter-spacing: 2px;
`;

const Job = styled.h4`
    color: #cccccc;
    letter-spacing: 1px;
`;

function TestimonialCard({ pfp, quote, name, job, isActive, offset, display }) {
    return (
        <CardContainer isActive={isActive} offset={offset} display={display}>
            <TestimonialBody offset={offset}>
                <TestimonialContent>{quote}</TestimonialContent>
                <StyledFaQuoteRight />
            </TestimonialBody>
            <TestimonialFooter>
                <ProfileImage src={pfp} />
                <Name>{name}</Name>
                <Job>{job}</Job>
            </TestimonialFooter>
        </CardContainer>
    );
}

export default TestimonialCard;
