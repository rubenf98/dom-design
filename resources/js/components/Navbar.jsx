import React, { useState } from 'react'
import { constant } from '../helper';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import NavbarMenu from './Common/NavbarMenu';
import { handleMenu } from '../redux/application/actions';
import { dimensions } from '../helper';
import AnimationContainer from './Common/AnimationContainer';

const Container = styled.div`
    width: 100%;
    height: ${constant.navbarHeight + "px"};
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 100;
    
    .animated {
        z-index: 100;
    }

    img {
        height: 80px;
    }

    .menu, span {
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

    @media (max-width: ${dimensions.sm}) {
        padding: 10px 30px;
        height: calc(${constant.navbarHeight + "px"} - 50px);

        span {
            font-size: 16px;
        }

        img {
            height: 35px;
        }
    }
`;

const LanguageIndicator = styled.span`
    filter: ${props => props.active ? "opacity(1)" : "opacity(.4)"};
    z-index: 100;
    &:nth-child(2) {
        margin-left: 13px;
    }
`;

function Navbar({ theme, menuVisible, handleMenu }) {
    const [active, setActive] = useState(0)

    return (

        <Container>
            <NavbarMenu visible={menuVisible} />
            <AnimationContainer animateIn="fadeInUp" offset={0}>
                <Link style={{ zIndex: 100 }} to="/">
                    <img src={theme === 'light' ? "/light_logo.svg" : "/dark_logo.svg"} alt="logo" />
                </Link></AnimationContainer>
            <AnimationContainer animateIn="fadeInUp" offset={0}>
                <p className='menu' style={{ zIndex: 100 }} onClick={() => handleMenu(!menuVisible)}>
                    {menuVisible ? "close" : "menu"}
                </p>
            </AnimationContainer>
            <AnimationContainer animateIn="fadeInUp" offset={0}>
                <div style={{ zIndex: 100 }} >
                    <LanguageIndicator active={active == 0} onClick={() => setActive(0)}>pt</LanguageIndicator>
                    <LanguageIndicator active={active == 1} onClick={() => setActive(1)}>eng</LanguageIndicator>
                </div>
            </AnimationContainer>
        </Container>

    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
        menuVisible: state.application.menuVisible,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleMenu: (state) => dispatch(handleMenu(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);