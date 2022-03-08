import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    scroll-behavior: smooth;
    width: 100%;
    min-height: 100vh;
    overflow: visible;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 24px;
`;

const Content = styled.div`
    z-index: 2;
`;

function Homepage() {
    return (
        <Container>
            home
        </Container>
    )
}

export default Homepage