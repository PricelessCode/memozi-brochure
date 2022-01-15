import React from "react";
import styled from "styled-components";
import Card from "./Card";
import flashcardImg from "../../../asset/casual-life-3d-green-and-pink-messages.png"

const data = [
    {
        title: "Flash Cards",
        img: flashcardImg,
        desc: "Create Personalized Flashcards for yourself and others!",
    },
    {
        title: "Mentors",
        img: flashcardImg,
        desc: "Be a Mentor or subscribe to Mentors you'd like to learn from daily!",
    },
    {
        title: "Classes",
        img: flashcardImg,
        desc: "Create Personalized Flashcards for yourself and others!",
    },
];

const ServiceContainer = styled.div`
    display: flex;
    z-index: 1;
    width: 100%;
    max-width: 1600px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    align-content: stretch;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
`;

const Col = styled.div`
    margin-bottom: 15px;
    padding-right: 20px;
    padding-left: 20px;
    flex: 1;
`;

function Service() {
    return (
        <>
            <ServiceContainer>
                <h1>Service</h1>
                <Row>
                    {data.map(({title, img, desc}) => {
                        <Col>
                            <Card title={title} img={img} desc={desc} />
                        </Col>;
                    })}
                </Row>
            </ServiceContainer>
        </>
    );
}

export default Service;
