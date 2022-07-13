import React, { useContext } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { constant, dimensions } from '../../helper';
import { ThemeContext } from 'styled-components'
import AnimationContainer from '../Common/AnimationContainer';
import { useNavigate, useLocation } from 'react-router-dom'
import UnderlineEffect from '../Common/UnderlineEffect';

const Container = styled.div`
    max-width: ${constant.maxWidth + "px"};
    margin: auto;
    width: 100%; 
    padding: 130px 0px;
    box-sizing: border-box;
    

    @media (max-width: ${dimensions.md}) {
        padding: 70px 0px;
    }
        
`;


const Content = styled.div`
    width: 60%;
    margin: auto;
    display: block;
`;
const Logo = styled.div`
    cursor: pointer;

    img {
        width: 70px;
        margin: auto;
        display: block;
    }

    h2 {
        font-size: 50px;
        font-weight: 900;
        letter-spacing: -3px;
        text-align: center;
        text-transform: uppercase;
        margin: 33px auto;

        @media (max-width: ${dimensions.md}) {
            font-size: 32px;
            letter-spacing: -1.92px;
        }
        
        span {
            color: ${props => props.theme.background};
            text-shadow: ${props =>
        "-1px -1px 0 " + props.theme.text +
        ",0   -1px 0 " + props.theme.text +
        ",1px -1px 0 " + props.theme.text +
        ",1px  0   0 " + props.theme.text +
        ",1px  1px 0 " + props.theme.text +
        ",0    1px 0 " + props.theme.text +
        ",-1px  1px 0 " + props.theme.text +
        ",-1px  0   0 " + props.theme.text
    };
        }

    }
`;


const Pages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;

    p {
        font-size: 20px;
        letter-spacing: -1.2px;
        font-weight: 300;
        margin: 0px 30px;
        cursor: pointer;
        white-space: nowrap;

        @media (max-width: ${dimensions.md}) {
            font-size: 15px;
            letter-spacing: -.8px;
        }
    }
`;

const Copyright = styled.div`
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -1.2px;
    text-align: center;

    @media (max-width: ${dimensions.md}) {
        font-size: 12px;
        letter-spacing: -.7px;
    }

    span {
        font-weight: 900;
        text-decoration: underline;
    }

    a{
        color: inherit;
    }
`;
function Links({ theme, text }) {
    const themeContext = useContext(ThemeContext);
    let navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClick = (filter) => {
        if (pathname == "/") {
            var element = document.getElementById(filter);
            window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        } else return navigate("/?scrollTo=" + filter);
    }




    return (
        <Container>

            <Content>
                <AnimationContainer animateIn="fadeIn">
                    <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} theme={themeContext}>
                        <img src={theme === 'light' ? "/light_logo.svg" : "/dark_logo.svg"} alt="logo" />
                        <h2><span>dom</span> design</h2>
                    </Logo>
                </AnimationContainer>
                <AnimationContainer animateIn="fadeInUp">
                    <Pages>
                        <UnderlineEffect><p onClick={() => handleClick('about-container')} >{text.about}</p></UnderlineEffect>
                        <UnderlineEffect><p onClick={() => handleClick('Portfolio')} >{text.portfolio}</p></UnderlineEffect>
                        <UnderlineEffect><p onClick={() => handleClick('Contact')} >{text.contact}</p></UnderlineEffect>
                    </Pages>
                </AnimationContainer>
            </Content>
            <Copyright>
                <AnimationContainer animateIn="fadeInUp" offset={20}>
                    © Designed by <span>dom design</span> and developed by <a href='https://ruben-freitas.pt/' target="_blank">Rúben Freitas</a>
                </AnimationContainer>
            </Copyright>
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
)(Links);