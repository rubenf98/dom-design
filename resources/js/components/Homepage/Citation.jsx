import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 1270px;
margin: auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 102px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.84;
    letter-spacing: -6.12px;
`;


function Citation() {
    return (
        <Container>"através das ideias da nossa equipa, idealize o que deseja."</Container>
    )
}

export default Citation