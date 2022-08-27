import React from 'react';
import styled from "styled-components";

// import "./SubHeading.css";

export default function SubHeading({title}) {
    return (
        <div style={{marginBottom: '1rem'}}>
            <p className="p__cormorant">{title}</p>
                <img className="app__wrapper-img" src="./Images/spoon.png" alt="spoon" />
        </div>
    )
}

const Container = styled.div`

`;