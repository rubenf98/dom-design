import React, { useContext } from 'react'
import { constant } from '../../helper';
import styled from 'styled-components';
import { connect } from "react-redux";
import { setLightTheme, setDarkTheme } from "../../redux/application/actions";
import ScrollIndicator from '../Common/ScrollIndicator';
import { dimensions } from '../../helper';
import AnimationContainer from '../Common/AnimationContainer';
import UnderlineEffect from '../Common/UnderlineEffect';
import { ThemeContext } from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - ${constant.navbarHeight + "px"});
    padding: 0px 100px ;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;

    @media (max-width: ${dimensions.sm}) {
        padding: 0px 30px;
    }
`;

const TitleContainer = styled.div`
    padding-bottom: ${constant.navbarHeight + "px"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    text-transform: uppercase;  
    line-height: 0.85;
`;

const Title = styled.div`
    font-size: 6vw;
    font-weight: 300;
    letter-spacing: -6.84px;
    
    @media (max-width: ${dimensions.md}) {
        letter-spacing: -2.22px;
    }

    @media (min-width: ${dimensions.xxl}) {
        font-size: 200px;
    }

    @media (max-width: ${dimensions.sm}) {
        font-size: 37px;
    }

    span {
        font-weight: 900;           
    }
`;

const SocialContainer = styled.div`
    transform: rotate(90deg);
    padding-bottom: 300px;
    display: block;
    white-space: nowrap; 
    position: absolute;
    right: 0px;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -1.36px;
    

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    a {
        opacity: 0.7;
        margin: 0px 25px;
        text-decoration: none;
        color: ${props => props.color};
        transition: opacity .3s linear;

        &:hover {
            opacity:1;
        }
    }
`;

const ThemeSwitch = styled.img`
    position: absolute;
    right: 90px;
    bottom: 5vh;
    width: 35px; height: 35px;
    cursor: pointer;

    @media (max-width: ${dimensions.md}) {
        right: 20px;
    }
`;

const ScrollContainer = styled.div`
    position: absolute;
    left: 100px;
    bottom: 5vh;
    cursor: pointer;

    @media (max-width: ${dimensions.md}) {
        left: 30px;
    }
`;

function Header({ theme, setDarkTheme, setLightTheme }) {
    const themeContext = useContext(ThemeContext);

    return (
        <AnimationContainer animateIn="fadeInUp" duration={1.5}>
            <Container>

                <TitleContainer>
                    <Title>
                        dom no <span>design</span>
                        <br />
                        & dom no <span>espaço.</span>

                    </Title>
                    <SocialContainer color={themeContext.text}>
                        <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/DomDesignCriativo">facebook</a>
                        <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/domdesign_criativo/">instagram</a>
                    </SocialContainer>
                </TitleContainer>
                <ScrollContainer>
                    <ScrollIndicator />
                </ScrollContainer>
                <ThemeSwitch src={theme === 'light' ? "/icon/light_theme_switch.svg" : "/icon/dark_theme_switch.svg"} onClick={theme === 'light' ? setDarkTheme : setLightTheme} />

            </Container>
        </AnimationContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLightTheme: () => dispatch(setLightTheme()),
        setDarkTheme: () => dispatch(setDarkTheme()),
    };
};

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);