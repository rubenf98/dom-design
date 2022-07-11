import React, { useEffect } from 'react'
import styled from 'styled-components';
import About from './Homepage/About';
import Citation from './Homepage/Citation';
import Header from './Homepage/Header';
import Portfolio from './Homepage/Portfolio';
import Process from './Homepage/Process';
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
    scroll-behavior: smooth;
`;


function Homepage() {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        var filter = searchParams.get("scrollTo");
        var element = document.getElementById(filter);
        setTimeout(() => {
            window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }, 0);
    }, [])

    return (
        <Container >
            <Header />

            <div style={{ margin: "35vh 0px" }}>
                <Citation quote="Através das ideias da nossa equipa, idealize o que deseja." />
            </div>


            <Portfolio />
            <div id="about-container" style={{ position: "relative", overflowX: "hidden" }}>
                <About />
            </div>

            <Process />
        </Container>
    )
}

export default Homepage