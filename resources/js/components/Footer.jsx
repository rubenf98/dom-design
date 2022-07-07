import React from 'react'
import Contact from './Footer/Contact'
import Links from './Footer/Links'
import { useLocation } from 'react-router-dom'
import AnimationContainer from './Common/AnimationContainer';
import styled from 'styled-components';
import { connect } from "react-redux";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    position: absolute;
    opacity: .3;
    z-index: -1;

    .animated{
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const LinksContainer = styled.div`
    position: relative;
`;

function Footer({ theme }) {
    const location = useLocation();
    return (
        <div>
            {location.pathname.split('/')[1] !== "project" && <Contact />}
            <LinksContainer>
                <Background  >
                    <AnimationContainer animateIn="fadeIn" duration={2.5} offset={0}>
                        <picture>
                            <source media="(max-width: 599px)" srcSet={theme === 'light' ? "/image/wallpaper_light_mobile.jpg" : "/image/wallpaper_dark_mobile.jpg"} />
                            <source media="(min-width: 600px)" srcSet={theme === 'light' ? "/image/wallpaper_light.jpg" : "/image/wallpaper_dark.jpg"} />
                            <img src={theme === 'light' ? "/image/wallpaper_light.jpg" : "/image/wallpaper_dark.jpg"} alt="Wallpaper" />
                        </picture>
                    </AnimationContainer>
                </Background>
                <Links />
            </LinksContainer>
        </div>
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
)(Footer);