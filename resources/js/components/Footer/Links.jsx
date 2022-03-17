import React, { useContext } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { constant, dimensions } from '../../helper';
import { ThemeContext } from 'styled-components'

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
`;
function Links({ theme }) {
    const themeContext = useContext(ThemeContext);

    const handleClick = (filter) => {
        var element = document.getElementById(filter);
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }

    return (
        <Container>
            <Content>
                <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} theme={themeContext}>
                    <img src={theme === 'light' ? "/light_logo.svg" : "/dark_logo.svg"} alt="logo" />
                    <h2><span>dom</span> design</h2>
                </Logo>
                <Pages>
                    <p onClick={() => handleClick('about-container')} >sobre nós</p>
                    <p onClick={() => handleClick('Portfolio')} >portfólio</p>
                    <p onClick={() => handleClick('Contact')} >contactos</p>
                </Pages>
            </Content>
            <Copyright>
                © All rights reserved <span>dom design</span>
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