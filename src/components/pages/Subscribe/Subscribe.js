import React from "react";
import styled from "styled-components";
import theme from "../../../theme";

const breakPoint = "955px";

const SubscribeSection = styled.div`
  background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.blueberry},
        ${({ theme }) => theme.colors.violet}
    );
`

const SubscribeContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;
    max-width: 1600px;
    margin-right: auto;
    margin-left: auto;
    padding: 100px 50px;
    align-content: stretch;
    justify-content: center;
    align-items: center;
    color: white;
    
`;

const SectionTitle = styled.h1`
    margin-bottom: 20px;
`;

const SubscribeDesc = styled.p`
    font-size: 25px;
    margin-bottom: 50px;
`;

const EmailInput = styled.input`
    font-size: 18px;
    width: 500px;
    border-radius: 12px;
    padding: 8px 12px;
    border: none;
    margin-bottom: 40px;
    outline: none;
`;

const SubscribeButton = styled.button`
    width: 200px;
    cursor: pointer;
    font-size: 20px;
    border-radius: 30px;
    border: none;
    transition: 0.3s all;
    padding: 5px 12px;

    &:hover {
      box-shadow: 0 0.5em 0.5em -0.4em red;
      background-color: pink;
    }
`;

const Row = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${breakPoint}) {
        flex-direction: column;
    }
`;

function Subscribe() {
    return (
        <SubscribeSection>
            <SubscribeContainer>
                <SectionTitle>Newsletter</SectionTitle>
                <SubscribeDesc>
                    Stay up to date with our latest news and updates
                </SubscribeDesc>

                <EmailInput placeholder="Email" />
                <SubscribeButton>Subscribe</SubscribeButton>
            </SubscribeContainer>
        </SubscribeSection>
    );
}

export default Subscribe;
