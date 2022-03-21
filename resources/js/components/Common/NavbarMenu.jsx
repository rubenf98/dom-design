import React, { useContext } from 'react'
import { connect } from 'react-redux';
import styled, { keyframes, css, ThemeContext } from 'styled-components';
import { handleMenu } from '../../redux/application/actions';
import { dimensions } from '../../helper';
import UnderlineEffect from './UnderlineEffect';
import { useNavigate, useLocation } from 'react-router-dom'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
    width: 100%;
    height: ${props => props.visible ? "100vh" : "0%"};
    z-index: 99;
    position: absolute;
    top: 0px; right: 0px; left: 0px; bottom: 0px;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    background: ${props => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: height 1s ease-in-out;

    .links-container {
        margin: auto;
        text-align: center;
        animation: ${props =>
        props.visible &&
        css`
                ${fadeIn} 2s linear
                `};
        
        p {
            opacity: ${props => props.visible ? "1" : "0"};
            transition: opacity 3s ease-in-out;
            font-size: 86px;
            letter-spacing: -5.16px;
            font-weight: 900;
            margin: 10px 0px;
            display: block;
            cursor: pointer;
            

            @media (max-width: ${dimensions.sm}) {
                font-size: 63px;
            }
        }
    }
`;

function NavbarMenu({ visible, handleMenu }) {
    const themeContext = useContext(ThemeContext);
    let navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClick = (filter) => {
        handleMenu(false);
        if (pathname == "/") {
            var element = document.getElementById(filter);
            window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        } else return navigate("/?scrollTo=" + filter);
    }

    return (
        <Container visible={visible} color={themeContext.text} background={themeContext.background}>
            {
                visible &&
                <div className='links-container'>
                    <UnderlineEffect ><p onClick={() => handleClick('about-container')} >sobre nós</p> </UnderlineEffect>
                    <UnderlineEffect ><p onClick={() => handleClick('Portfolio')} >portfólio</p> </UnderlineEffect>
                    <UnderlineEffect ><p onClick={() => handleClick('Contact')} >contactos</p> </UnderlineEffect>
                </div>
            }
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMenu: (state) => dispatch(handleMenu(state)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NavbarMenu);