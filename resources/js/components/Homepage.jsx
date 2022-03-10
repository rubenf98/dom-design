import React from 'react'
import About from './Homepage/About';
import Citation from './Homepage/Citation';
import Header from './Homepage/Header';
import Portfolio from './Homepage/Portfolio';

function Homepage() {
    return (
        <div>
            <Header />
            <Citation quote="através das ideias da nossa equipa, idealize o que deseja." />
            <Portfolio />
            <div style={{ position: "relative", overflowX: "hidden" }}>
                <About />
            </div>
        </div>
    )
}

export default Homepage