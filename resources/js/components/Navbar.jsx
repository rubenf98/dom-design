import React, { useState, useEffect } from 'react'
import { constant } from '../helper';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import NavbarMenu from './Common/NavbarMenu';
import { handleMenu } from '../redux/application/actions';
import { dimensions } from '../helper';
import AnimationContainer from './Common/AnimationContainer';
import UnderlineEffect from './Common/UnderlineEffect';


const Container = styled.div`
    width: 100%;
    height: ${constant.navbarHeight + "px"};
    padding: 30px 100px;
    display: flex;
    justify-content: center;
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

    @media (max-width: ${dimensions.lg}) {
        padding: 30px 80px;
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
    const [active, setActive] = useState("pt")

    useEffect(() => {
        setActive(localStorage.getItem("language"));
    }, []);

    function handleLanguageClick(language) {
        localStorage.setItem("language", language);
        setActive(language)
        location.reload();
    }


    return (

        <Container>
            <NavbarMenu visible={menuVisible} />
            <div style={{ marginRight: "auto" }}>
                <AnimationContainer animateIn="fadeInUp" offset={0}>
                    <Link style={{ zIndex: 100 }} to="/">
                        <img src={theme === 'light' ? "/light_logo.svg" : "/dark_logo.svg"} alt="logo" />
                    </Link></AnimationContainer>
            </div>

            <AnimationContainer animateIn="fadeInUp" offset={0}>
                <UnderlineEffect>
                    <p className='menu' style={{ zIndex: 100 }} onClick={() => handleMenu(!menuVisible)}>
                        {menuVisible ? "close" : "menu"}
                    </p>
                </UnderlineEffect>
            </AnimationContainer>
            <div style={{ marginLeft: "auto" }}>
                <AnimationContainer animateIn="fadeInUp" offset={0}>
                    <div style={{ zIndex: 100 }} >
                        <LanguageIndicator active={active == "pt"} onClick={() => handleLanguageClick("pt")}>pt</LanguageIndicator>
                        <LanguageIndicator active={active == "en"} onClick={() => handleLanguageClick("en")}>eng</LanguageIndicator>
                    </div>
                </AnimationContainer>
            </div>
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