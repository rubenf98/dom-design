import React, { useState } from 'react'
import { constant } from '../helper';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: ${constant.navbarHeight + "px"};
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    

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
    filter: ${props => props.active ? "opacity(1)" : "opacity(.4)"};
    
    &:nth-child(2) {
        margin-left: 13px;
    }
`;

function Navbar({ theme }) {
    const [active, setActive] = useState(0)

    return (
        <Container>
            <Link to="/">
                <img src={theme === 'light' ? "/light_logo.svg" : "/dark_logo.svg"} alt="logo" />
            </Link>

            <p>menu</p>
            <div>
                <LanguageIndicator active={active == 0} onClick={() => setActive(0)}>pt</LanguageIndicator>
                <LanguageIndicator active={active == 1} onClick={() => setActive(1)}>eng</LanguageIndicator>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
    };
};

export default connect(
    mapStateToProps,
    null
)(Navbar);