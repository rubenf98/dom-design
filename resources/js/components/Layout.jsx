import React, { useState } from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { light, dark } from "./themes"
import { connect } from "react-redux";
import Footer from './Footer';

const Container = styled.div`
//
`;


function Layout({ children, theme, menuVisible }) {

    return (
        <div style={{ overflow: "hidden" }}>
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                <>

                    <GlobalStyles overflow={menuVisible ? "hidden" : "auto"} />

                    <Navbar />

                    {children}



                    <Footer />

                </>
            </ThemeProvider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
        menuVisible: state.application.menuVisible,
    };
};

export default connect(
    mapStateToProps,
    null
)(Layout);