import React, { useState } from "react";
import styled, { css } from "styled-components";
import img1 from "../../../asset/testimonials/student-girl-min.jpg";
import img2 from "../../../asset/testimonials/korean-min.jpg";
import img3 from "../../../asset/testimonials/student-boy-min.jpg";
import img4 from "../../../asset/testimonials/designer-min.jpg";
import img5 from "../../../asset/testimonials/musicteacher-min.jpg";
import TestimonialCard from "./TestimonialCard";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const data = [
    {
        pfp: img1,
        name: "Sophia Luisa",
        job: "College Student",
        quote: "I found so many mentors so much better than my professors at my college!",
    },
    {
        pfp: img2,
        name: "Eric Kim",
        job: "Korean Linguist",
        quote: "Such a great platform connecting between mentors and students!",
    },
    {
        pfp: img3,
        name: "James Edwards",
        job: "Self-taught Student",
        quote: "I found so many mentors so much better than my professors at my college!",
    },
    {
        pfp: img4,
        name: "Emily Grace",
        job: "UI/UX Designer",
        quote: "I landed my first dream UI/UX Designer job after taking courses from Memozi :)!",
    },
    {
        pfp: img5,
        name: "Carl Smith",
        job: "Music Teacher",
        quote: "I get daily requests on music theories and this excites me everyday!",
    },
];

const TestimonialSection = styled.div`
    background: #2c2d31;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
`;

const TestimonialContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c2d31;
`;

const Carousel = styled.div`
    position: relative;
    width: 23rem;
    height: 400px;
    perspective: 500px;
    transform-style: preserve-3d;
`;

const NavButtonStyle = css`
    color: white;
    background: none;
    border: none;
    position: absolute;
    cursor: pointer;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
`;

const LeftNavButton = styled.button`
    ${NavButtonStyle}
    left: 0;
    transform: translate(-290%, -50%);
`;

const RightNavButton = styled.button`
    ${NavButtonStyle}
    right: 0;
    transform: translate(290%, -50%);
`;

const Indicator = styled.ul`
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    list-style-type: none;
    z-index: 2;
`;

const IndicatorItem = styled.li`
    position: relative;
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #fff;

    &:not(:last-child) {
        margin-right: 5px;
    }

    &::after {
        position: absolute;
        display: block;
        content: "";

        background: #fff;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        opacity: ${({ active }) => (active ? 1 : 0)};
        transform: translate(-50%, -50%)
            ${({ active }) => (active ? "scale(1, 1)" : "scale(0, 0)")};
        transition: 0.3s;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1, 1);
        opacity: 1;
    }
`;

function Testimonials() {
    const [active, setActive] = useState(2);
    const count = data.length;
    const MAX_VISIBILITY = 3;

    return (
        <TestimonialSection>
            <TestimonialContainer>
                <Carousel>
                    {active > 0 && (
                        <LeftNavButton>
                            <GoChevronLeft
                                onClick={() => setActive((i) => i - 1)}
                            />
                        </LeftNavButton>
                    )}
                    {data.map((info, i) => {
                        return (
                            <TestimonialCard
                                {...info}
                                isActive={i === active}
                                offset={(active - i) / 3}
                                display={
                                    Math.abs(active - i) >= MAX_VISIBILITY
                                        ? "none"
                                        : "block"
                                }
                            />
                        );
                    })}

                    {active < count - 1 && (
                        <RightNavButton>
                            <GoChevronRight
                                onClick={() => setActive((i) => i + 1)}
                            />
                        </RightNavButton>
                    )}

                    <Indicator>
                        {[...Array(count).keys()].map((item, i) => {
                            return (
                                <IndicatorItem
                                    key={i}
                                    active={active === i}
                                    onClick={() => setActive(i)}
                                />
                            );
                        })}
                    </Indicator>
                </Carousel>
            </TestimonialContainer>
        </TestimonialSection>
    );
}

export default Testimonials;
