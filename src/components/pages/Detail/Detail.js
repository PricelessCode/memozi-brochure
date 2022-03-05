import React from "react";
import styled from "styled-components";

const topLineColor = ({ theme }) => theme.colors.red;

const midBreakPoint = "1322px";
const mobileBreakPoint = "955px";

const DetailSection = styled.div`
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.colors.navy};
`;

const DetailContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1500px;
    margin: auto;
    padding: 100px 70px;
    color: white;
    justify-content: center;

    @media only screen and (max-width: ${mobileBreakPoint}) {
        padding-right: 100px;
        padding-left: 100px;
    }
`;

const DetailRow = styled.div`
    display: flex;
    flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
    align-items: center;
`;

const DetailCol = styled.div`
    flex: 1;
    @media only screen and (max-width: ${mobileBreakPoint}) {
        
    }
`;

const ImgCol = styled.div`
    flex: 1;

    @media only screen and (max-width: ${mobileBreakPoint}) {
        display: none;
    }
`;

const DetailTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 638px;
`;

const DetailImgWrapper = styled.div`
    max-width: 500px;
    margin: auto;
    text-align: center;
`;

const TopText = styled.div`
    color: ${(props) => props.highlightColor};
    font-weight: bold;
    font-size: 18px;
`;

const HeadLine = styled.h1`
    font-size: 40px;
    margin-top: 15px;
    margin-bottom: 40px;
`;

const Description = styled.p`
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 40px;
`;

const DetailImg = styled.img`
    display: inline-block;
    max-width: 100%;
`;

const CTABtn = styled.button`
    padding: 12px 8px;
    color: white;
    border: none;
    font-size: 20px;
    background: ${(props) => props.highlightColor};
    border-radius: 12px;
    cursor: pointer;

    &:hover {
        background: pink;
        transition: 0.3s;
    }
`;

const Detail = ({
    topLine,
    headline,
    description,
    btnLabel,
    highlightColor,
    img,
    alt,
    imgStart,
}) => {
    return (
        <DetailSection>
            <DetailContainer>
                <DetailRow imgStart={imgStart}>
                    <DetailCol>
                        <DetailTextWrapper>
                            <TopText highlightColor={highlightColor}>
                                {topLine}
                            </TopText>
                            <HeadLine>{headline}</HeadLine>
                            <Description>{description}</Description>
                            <CTABtn highlightColor={highlightColor}>
                                {btnLabel}
                            </CTABtn>
                        </DetailTextWrapper>
                    </DetailCol>
                    <ImgCol>
                        <DetailImgWrapper>
                            <DetailImg src={img} alt={alt} />
                        </DetailImgWrapper>
                    </ImgCol>
                </DetailRow>
            </DetailContainer>
        </DetailSection>
    );
};

export default Detail;
