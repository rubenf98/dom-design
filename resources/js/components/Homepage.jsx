import React from 'react'
import styled from 'styled-components';
import Citation from './Homepage/Citation';
import Header from './Homepage/Header';
import Portfolio from './Homepage/Portfolio';

function Homepage() {
    return (
        <div>
            <Header />
            <Citation />
            <Portfolio />
        </div>
    )
}

export default Homepage