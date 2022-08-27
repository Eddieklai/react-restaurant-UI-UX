import React from 'react';

import "./Aboutus.css";

export default function Aboutus() {
    return (
        <div className={"app__aboutus app__bg flex__center section__padding"} id="about">
            <div className="app__aboutus-overlay flex__center">
                <img src="./Images/G.png" alt="G" />
            </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">About Us</h1>
                    <img src="./Images/spoon.png" alt="about_spoon" className="spoon__img"/>
                    <p className="p__opensans">Consectetur mandamus ea petentium gloriatur aliquip. Labores mi ad postea solum numquam eum tempor.</p>
                    <button type="button" className="custom__button">Know more</button>
                </div>

                <div className="app__aboutus-content_knife flex__center">
                    <img src="./Images/knife.png" alt="about_knife" className="knight__img"/>
                </div>

                <div className="app__aboutus-content_history">
                    <h1 className="headtext__cormorant">Our history</h1>
                    <img src="./Images/spoon.png" alt="about_spoon" className="spoon__img"/>
                    <p className="p__opensans">Consectetur mandamus ea petentium gloriatur aliquip. Labores mi ad postea solum numquam eum tempor.</p>
                    <button type="button" className="custom__button">Know more</button>
                </div>
            </div>
        </div>
    )
}
