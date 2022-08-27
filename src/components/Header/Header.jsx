import React from 'react';

import SubHeading from "../SubHeading/SubHeading";

import "./Header.css";

export default function Header() {
    return (
        <div className={"app__header app__wrapper section__padding"} id={"home"}>
            <div className={"app__wrapper_info"}>
                <SubHeading title="Chase the new flavour"/>
                <h1 className="app__header-h1">The key to fine dining</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}></p>
                <button type="button" className="custom__button">explore menu</button>
            </div>
            <div className="app__wrapper_img">
                <img src="./Images/welcome.png" alt="welcome" />
            </div>
        </div>
    )
}
