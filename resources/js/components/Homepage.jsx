import React from 'react'
import styled from 'styled-components';
import About from './Homepage/About';
import Citation from './Homepage/Citation';
import Header from './Homepage/Header';
import Portfolio from './Homepage/Portfolio';
import Process from './Homepage/Process';


const Container = styled.div`
    scroll-behavior: smooth;
`;


function Homepage() {
    return (
        <Container >
            <Header />
            <Citation quote="através das ideias da nossa equipa, idealize o que deseja." />
            <Portfolio />
            <div id="about-container" style={{ position: "relative", overflowX: "hidden" }}>
                <About />
            </div>

            <Process />
        </Container>
    )
}

export default Homepage