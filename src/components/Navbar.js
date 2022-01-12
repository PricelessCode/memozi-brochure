import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosFlash, IoIosMenu, IoIosClose } from "react-icons/io";
import styled from "styled-components";
import { IconContext } from "react-icons";

const breakPoint = "955px";

const Nav = styled.nav`
    background: #1c2237;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const HomeLink = styled.a`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    z-index: 1;
    width: 100%;
    max-width: 1400px;
    padding-right: 50px;
    padding-left: 50px;

    @media only screen and (max-width: ${breakPoint}) {
        & {
            padding-left: 20px;
        }
    }
`;

const HamburgerMenu = styled.div`
    position: absolute;
    font-size: 35px;
    top: 20px;
    right: 20px;
    cursor: pointer;
    display: none;

    @media only screen and (max-width: ${breakPoint}) {
        & {
            display: block;
        }
    }
`;

const NavMenus = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;

    @media only screen and (max-width: ${breakPoint}) {
        & {
            display: none;
        }

        &.active {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            position: absolute;
            top: 80px;
            left: 0;
            background: #1c2237;
            width: 100%;
            height: 30vh;
            opacity: 1;
            transition: all 0.8s ease;
            z-index: 1;
        }
    }
`;

const MenuItem = styled.li`
    cursor: pointer;
    padding: 8px 20px;

    @media only screen and (max-width: ${breakPoint}) {
        display: flex;

        width: 100%;
        flex: 1;
        justify-content: center;
        align-items: center;
        &:hover {
            background: red;
            transition: all 0.8s ease;
        }
    }
`;

const MenuLink = styled.a`
    font-size: 20px;
    color: white;

    &:hover {
        color: #ffffa7;
        border-bottom: 1px solid #ffffa7;
        transition: all 0.6s ease;
    }

    @media only screen and (max-width: ${breakPoint}) {
        &:hover {
            border-bottom: none;
        }
    }
`;

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarContainer>
                        <HomeLink to="/">
                            <IoIosFlash
                                className="navbar-icon"
                                color="yellow"
                            />
                            MEMOZI
                        </HomeLink>

                        <HamburgerMenu
                            onClick={handleClick}
                            color="white"
                            clicked={clicked}
                        >
                            {clicked ? <IoIosClose /> : <IoIosMenu />}
                        </HamburgerMenu>

                        <NavMenus className={clicked ? "active" : ""}>
                            <MenuItem>
                                <MenuLink>Home</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>Services</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>Products</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>Support</MenuLink>
                            </MenuItem>
                        </NavMenus>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
