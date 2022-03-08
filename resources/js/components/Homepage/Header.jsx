import React from 'react'
import { constant } from '../../helper';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - ${constant.navbarHeight + "px"});
    padding: 0px 100px ;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-size: 114px;
    font-weight: 300;
    letter-spacing: -6.84px;

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
    opacity: 0.7;

    span {
        margin: 0px 25px;
    }
`;

function Header() {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    dom no <span>design</span>
                    <br />
                    & dom no <span>espaço.</span>
                </Title>
                <SocialContainer><span>facebook</span><span>instagram</span></SocialContainer>
            </TitleContainer>
        </Container>
    )
}

export default Header