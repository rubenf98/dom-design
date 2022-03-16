import React, { useContext } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import { handleMenu } from '../../redux/application/actions';

const Container = styled.div`
    width: 100%;
    height: ${props => props.visible ? "100%" : "0%"};
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

    .links-container {
        margin: auto;
        text-align: center;

        p {
            font-size: 86px;
            letter-spacing: -5.16px;
            font-weight: 900;
            margin: 10px 0px;
            display: block;
            cursor: pointer;
        }
    }
`;

function NavbarMenu({ visible, handleMenu }) {
    const themeContext = useContext(ThemeContext);

    const handleClick = (filter) => {
        var element = document.getElementById(filter);
        handleMenu(false);
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }

    return (
        <Container visible={visible} color={themeContext.text} background={themeContext.background}>
            {
                visible &&
                <div className='links-container'>
                    <p onClick={() => handleClick('about-container')} >sobre nós</p>
                    <p onClick={() => handleClick('Portfolio')} >portfólio</p>
                    <p onClick={() => handleClick('Contact')} >contactos</p>
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