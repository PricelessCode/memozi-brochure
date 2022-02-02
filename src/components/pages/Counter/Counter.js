import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import worldImg from "../../../asset/pngwing.com.png";
import {
    BsFillBookmarkStarFill,
    BsCalendarWeekFill,
    BsPeopleFill,
    BsBezier2,
} from "react-icons/bs";

const CounterSection = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 50px;
    color: black;
    background: url(${worldImg}) no-repeat center center fixed;
`;

const CounterContainer = styled.div`
    width: 100%;
    max-width: 1200px;
`;

const CounterRow = styled.div`
    display: flex;
`;

const CounterTextWrapper = styled.div`
    text-align: center;
`;

const CounterHeading = styled.h1``;

const CounterIcon = styled.div`
    font-size: 38px;
`;

const CounterNumber = styled.div`
    font-weight: bold;
    font-size: 30px;
`;

const CounterDesc = styled.p``;

const CounterCol = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const animate = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const counterData = [
    {
        icon: <BsFillBookmarkStarFill />,
        start: 0,
        end: 113,
        duration: 3000,
        desc: "Registered Mentors",
    },
    {
        icon: <BsPeopleFill />,
        start: 0,
        end: 1364,
        duration: 3000,
        desc: "Our Members",
    },
    {
        icon: <BsCalendarWeekFill />,
        start: 0,
        end: 235,
        duration: 3000,
        desc: "On-Going Classes",
    },
    {
        icon: <BsBezier2 />,
        start: 0,
        end: 23,
        duration: 3000,
        desc: "Affiliates",
    },
];

function Counter() {
    const refs = useRef([]);
    const scrollRef = useRef(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const hasScrolledTo = (el) => {
            if (!el) return false;
            return el.getBoundingClientRect().top < window.innerHeight;
        };

        const onScroll = () => {
            if (hasScrolledTo(scrollRef.current) && !triggered) {
                setTriggered(true);
                console.log(true);
                // do animation
                refs.current.map((ref, index) => {
                    const cntData = counterData[index];
                    animate(ref, cntData.start, cntData.end, cntData.duration);
                });
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [triggered]);

    return (
        <CounterSection>
            <CounterContainer>
                <CounterTextWrapper>
                    <CounterHeading>Our Numbers</CounterHeading>
                </CounterTextWrapper>
                <CounterRow ref={scrollRef}>
                    {counterData.map(({ icon, start, desc }) => {
                        return (
                            <CounterCol>
                                <CounterIcon>{icon}</CounterIcon>
                                <CounterNumber
                                    ref={(c) => {
                                        refs.current.push(c);
                                    }}
                                >
                                    {start}
                                </CounterNumber>
                                <CounterDesc>{desc}</CounterDesc>
                            </CounterCol>
                        );
                    })}
                </CounterRow>
            </CounterContainer>
        </CounterSection>
    );
}

export default Counter;
