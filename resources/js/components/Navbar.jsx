import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 150px;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;

    img {
        height: 80px;
    }

    p, span {
        font-weight: 900;
        font-size: 27px;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.85;
        letter-spacing: -2.62px;
        cursor: pointer;

        &::after {
            content: ".";
        }
    }
`;

const LanguageIndicator = styled.span`
    color: ${props => props.active ? "#fff" : "rgba(255,255,255,.38)"};
    
    &:nth-child(2) {
        margin-left: 13px;
    }
`;

function Navbar() {
    const [active, setActive] = useState(0)

    return (
        <Container>
            <img src="logo.svg" alt="" />
            <p>menu</p>
            <div>
                <LanguageIndicator active={active == 0} onClick={() => setActive(0)}>pt</LanguageIndicator>
                <LanguageIndicator active={active == 1} onClick={() => setActive(1)}>eng</LanguageIndicator>
            </div>
        </Container>
    )
}

export default Navbar