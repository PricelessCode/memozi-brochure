import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    flex-wrap: wrap;
    border-radius: 12px;
    padding: 8px 12px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.skyBlue};
        transition: all 0.3s;
        color: white;
    }
`;

const CardTitle = styled.h4`
margin-bottom: 20px;`;

const CardImageWrapper = styled.div`
    margin-bottom: 40px;
`;

const CardImage = styled.img`
    height: 150px;
`;

const CardDesc = styled.p`
    text-align: center;
`;

function Card({ img, title, desc }) {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardImageWrapper>
                <CardImage src={img} />
            </CardImageWrapper>
            <CardDesc>{desc}</CardDesc>
        </CardContainer>
    );
}

export default Card;
