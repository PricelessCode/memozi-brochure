import React from "react";
import styled from "styled-components";
import Card from "./Card";
import flashcardImg from "../../../asset/casual-life-3d-green-and-pink-messages.png";
import mentorsImg from "../../../asset/casual-life-3d-card-with-woman-face-in-glasses-on-green-background.png";
import classesImg from "../../../asset/casual-life-3d-green-book-with-orange-ribbon.png";

const data = [
    {
        title: "Flash Cards",
        img: flashcardImg,
        desc: "Create Personalized Flashcards for yourself and others!",
    },
    {
        title: "Mentors",
        img: mentorsImg,
        desc: "Be a Mentor or subscribe to Mentors you'd like to learn from!",
    },
    {
        title: "Classes",
        img: classesImg,
        desc: "Create Classes for others and earn money!",
    },
];

const breakPoint = "955px";

const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-bottom: 50px;
`;

const SectionTitle = styled.h1`
    margin-bottom: 100px;
`;

const Row = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${breakPoint}) {
        flex-direction: column;
    }
`;

const Col = styled.div`
    margin-bottom: 15px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    flex: 1;
`;

function Service() {
    return (
        <>
            <ServiceContainer>
                <SectionTitle>Service</SectionTitle>
                <Row>
                    {data.map(({ title, img, desc }) => (
                        <Col key={title}>
                            <Card title={title} img={img} desc={desc} />
                        </Col>
                    ))}
                </Row>
            </ServiceContainer>
        </>
    );
}

export default Service;
