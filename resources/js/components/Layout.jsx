import React, { useState } from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { light, dark } from "./themes"
import { connect } from "react-redux";
import { setLightTheme, setDarkTheme } from "../redux/application/actions";

const Container = styled.div`
//
`;


function Layout({ children, theme }) {

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <>
                <GlobalStyles />

                <Navbar></Navbar>

                {children}

            </>
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
    };
};

export default connect(
    mapStateToProps,
    null
)(Layout);