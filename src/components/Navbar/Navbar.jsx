import React from 'react';
import styled from "styled-components";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

export default function Navbar() {
    const [toggleMenu, SetToggleMenu] = React.useState(false);

    return (
        <nav className={"app__navbar"}>
            <div className={"app__navbar-logo"}>
                <img src={"./Images/gericht.png"} alt={"logo"}/>
            </div>
            <ul className={"app__navbar-links"}>
                <li className={"p__opensans"}><a href={"#home"}>Home</a></li>
                <li className={"p__opensans"}><a href={"#About"}>About</a></li>
                <li className={"p__opensans"}><a href={"#Menu"}>Menu</a></li>
                <li className={"p__opensans"}><a href={"#Awards"}>Awards</a></li>
                <li className={"p__opensans"}><a href={"#Contact"}>Contact</a></li>
            </ul>
            <div className={"app__navbar-login"}>
                <a href={"#login"} className={"p__opensans"}>Login / Register</a>
                <div />
                <a href={"#BOOK table"} className={"p__opensans"}>BOOK Table</a>
            </div>
            <div className={"app__navbar-smallscreen"}>
                <GiHamburgerMenu color={"#fff"} fontSize={27} style={{cursor: 'pointer'}} onClick={() => SetToggleMenu(true)}/>
                {toggleMenu && (

                <div className={"app__navbar-smallscreen_overlay flex__center slide-bottom"}>
                    <MdOutlineRestaurantMenu fontSize={27} className={"overlay__close"} onClick={() => SetToggleMenu(false)}/>
                <ul className={"app__navbar-smallscreen-links"}>
                    <li className={"p__opensans"}><a href={"#home"}>Home</a></li>
                    <li className={"p__opensans"}><a href={"#About"}>About</a></li>
                    <li className={"p__opensans"}><a href={"#Menu"}>Menu</a></li>
                    <li className={"p__opensans"}><a href={"#Awards"}>Awards</a></li>
                    <li className={"p__opensans"}><a href={"#Contact"}>Contact</a></li>
                </ul>
                </div>
                )}

            </div>
        </nav>
    )
}
