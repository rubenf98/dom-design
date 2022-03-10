import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1270px;
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
    padding: 20vh 0px;
    box-sizing: border-box;
`;


function Citation({ quote }) {
    return (
        <Container>"{quote}"</Container>
    )
}

export default Citation