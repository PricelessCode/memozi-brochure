import React from "react";
import {
    IoIosFlash,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoReddit,
} from "react-icons/io";
import styled from "styled-components";

const navyColor = ({ theme }) => theme.colors.navy;
const whiteColor = ({ theme }) => theme.colors.white;

const breakPoint = "955px";

const data = [
    {
        title: "About Us",
        subMenu: ["Blog", "Testimonials", "Careers", "Investors"],
    },
    {
        title: "Services",
        subMenu: ["Mentors", "Students", "Classes", "Educations"],
    },
    {
        title: "Plans",
        subMenu: [
            "For Business",
            "For Schools",
            "For Teachers",
            "For Students",
        ],
    },
    {
        title: "Help & FAQs",
        subMenu: ["Support", "FAQs", "Get in touch", "Terms of Service"],
    },
];

const RoundStyle = `
    background: red;
    border-radius: 60px;
    font-size: 43px;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background: yellow;
        color: black;
        transition: all 0.3s;
    }
`;

const FooterSection = styled.footer`
    color: ${whiteColor};
    background: ${navyColor};
    padding: 50px 12px;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;
    max-width: 1800px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    align-content: stretch;
    justify-content: center;
    align-items: center;

`;

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    @media only screen and (max-width: ${breakPoint}) {
        flex-direction: column;
    }
`;

const BrandCol = styled.div`
    flex: 1;
    & p {
        margin-bottom: 12px;
    }

    
`;

const BrandLogo = styled.h2`
    margin-bottom: 10px;
`;

const SocialWrapper = styled.div`
    & > * {
        margin-right: 10px;
    }
`;

const MenuItemWrapper = styled.div`
    & h3 {
        margin-bottom: 15px;
    }

    & a {
        color: white;
        margin-bottom: 5px;
        display: block;
        text-decoration: none;
        cursor: pointer;
    }

    & a:hover {
        color: yellow;
    }

    flex: 1;

    @media only screen and (max-width: ${breakPoint}) {
        text-align: center;
        flex-basis: 50%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const FacebookIcon = styled(IoLogoFacebook)`
    ${RoundStyle}
    background: #0084FF;
`;
const InstagramIcon = styled(IoLogoInstagram)`
    ${RoundStyle}
    background: #EA4C89;
`;
const TwitterIcon = styled(IoLogoTwitter)`
    ${RoundStyle}
    background: #2993C2;
`;
const RedditIcon = styled(IoLogoReddit)`
    ${RoundStyle}
    background: #FF4501;
`;

const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`;

const FooterSectionMenus = ({ className, data }) => {
    return (
        <div className={className}>
            {data.map((col) => (
                <MenuItemWrapper key={col.title}>
                    <h3>{col.title}</h3>
                    {col.subMenu.map((link) => (
                        <a>{link}</a>
                    ))}
                </MenuItemWrapper>
            ))}
        </div>
    );
};

const StyledFooterSectionMenus = styled(FooterSectionMenus)`
    display: flex;
    flex: 2;
    margin-left: 40px;
    @media only screen and (max-width: ${breakPoint}) {
        margin-left: 0;
        width: 100%;
        padding: 20px;
        flex-wrap: wrap;
    }
`;

function Hero() {
    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <Row>
                        <BrandCol>
                            <BrandLogo>
                                MEMOZI
                                <IoIosFlash
                                    className="navbar-icon"
                                    color="yellow"
                                />
                            </BrandLogo>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </p>

                            <SocialWrapper>
                                <FacebookIcon />
                                <InstagramIcon />
                                <TwitterIcon />
                                <RedditIcon />
                            </SocialWrapper>
                        </BrandCol>
                        <StyledFooterSectionMenus data={data} />
                    </Row>

                    <CopyrightWrapper>
                        <p>
                            Copyright &copy; 2022 MEMOZI, Designed by Seungho
                            Lee
                        </p>
                    </CopyrightWrapper>
                </FooterContainer>
            </FooterSection>
        </>
    );
}

export default Hero;
