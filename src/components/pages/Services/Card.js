import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    
`;

const CardTitle = styled.h4`


`;

const CardImage = styled.img`


`;

const CardDesc = styled.p`

`;

function Card({ img, title, desc }) {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            {/* <CardImage src={img} /> */}
            <CardDesc>{desc}</CardDesc>
        </CardContainer>
    );
}

export default Card;
