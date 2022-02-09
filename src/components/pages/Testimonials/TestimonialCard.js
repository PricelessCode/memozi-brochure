import React from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";

const CardContainer = styled.div`
    width: 400px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const TestimonialBody = styled.div`
    padding: 40px 40px 80px;
    width: 100%;
`;

const TestimonialContent = styled.p`
    color: #555;
    font-size: 20px;
    line-height: 30px;
`;

const StyledFaQuoteRight = styled(FaQuoteRight)`
    color: #555;
    float: right;
    font-size:30px;
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

function TestimonialCard({ pfp, quote, name, job }) {
    return (
        <CardContainer>
            <TestimonialBody>
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
