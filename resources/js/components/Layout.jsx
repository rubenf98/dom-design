import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';


const Container = styled.div`
    background: #000000;
    color: #ffffff;
    font-size: 18px;
    line-height: 24px;
`;


function Layout({ children }) {
    return (
        <Container>
            <Navbar></Navbar>
            {children}
        </Container>
    )
}

export default Layout