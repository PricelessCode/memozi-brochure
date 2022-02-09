import React from "react";
import styled from "styled-components";
import img1 from "../../../asset/testimonials/student-girl-min.jpg";
import img2 from "../../../asset/testimonials/korean-min.jpg";
import img3 from "../../../asset/testimonials/student-boy-min.jpg";
import img4 from "../../../asset/testimonials/designer-min.jpg";
import img5 from "../../../asset/testimonials/musicteacher-min.jpg";
import TestimonialCard from "./TestimonialCard";

const data = [
    {
        pfp: img1,
        name: "Sophia Luisa",
        job: "College Student",
        quote: "I found so many mentors so much better than my professors at my college when it comes to Computer Science!",
    },
    {
        pfp: img2,
        name: "Eric Kim",
        job: "Korean Linguist",
        quote: "Such a great platform connecting between mentors and students! Needed a ",
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

const TestimonialContainer = styled.div`
    max-width: 1300px;
    display: flex;
    flex-direction: column;
`;

function Testimonials() {
    return (
        <TestimonialContainer>
            {data.map((info) => {
                return <TestimonialCard {...info} />;
            })}
        </TestimonialContainer>
    );
}

export default Testimonials;
