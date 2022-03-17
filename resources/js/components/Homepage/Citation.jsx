import React from 'react'
import styled from 'styled-components';
import { constant, dimensions } from '../../helper';

const Container = styled.div`
    max-width: ${constant.maxWidth + "px"};
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 102px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.84;
    letter-spacing: -6.12px;
    box-sizing: border-box;
    z-index: 2;
    position: relative;

    @media (max-width: ${dimensions.md}) {
        font-size: 43px;
        text-align: center;
        letter-spacing: -2.58px;
    }
`;


function Citation({ quote }) {
    return (
        <Container>"{quote}"</Container>
    )
}

export default Citation