import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrTrigger, GrClose, GrMenu } from "react-icons/gr";

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <GrTrigger className="navbar-icon" />
                        MEMOZI
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {clicked ? <GrClose /> : <GrMenu />}
                    </div>

                    <ul className={clicked ? "nav-menu active": 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/getsupport" className="nav-links">Get Support</Link>
                        </li>
                        <li className="nav-btn">
                            
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
