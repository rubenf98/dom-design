import React from 'react'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    top: 5px;
  }
  10% {
    top: 2px;
  }
  20% {
    top: 5px;
  }
  100% {
    top: 5px;
  }
`;

const Container = styled.div`
    cursor: pointer;
    font-size: 27px;
    line-height: 0.85;
    letter-spacing: -1.62px;
    position: relative;

    img {
        width: 15px;
        margin-left: 5px;
        animation: ${animate} ;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        position: absolute;
        animation-delay: 3s;
    }
`;

function TopIndicator({ theme }) {
    return (
        <Container onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Up <img src={theme === 'light' ? "/icon/light_up_arrow.svg" : "/icon/dark_up_arrow.svg"} />
        </Container>
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
)(TopIndicator);