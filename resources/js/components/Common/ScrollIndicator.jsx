import React from 'react'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    top: 2px;
  }
  15% {
    top: 5px;
  }
  30% {
    top: 2px;
  }
  100% {
    top: 2px;
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
        animation: ${scroll} ;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        position: absolute;
        animation-delay: 3s;
        transition: all .1s ease;
    }
`;

function ScrollIndicator({ theme }) {
    return (
        <Container>
            Scroll
            <img src={theme === 'light' ? "/icon/light_down_arrow.svg" : "/icon/dark_down_arrow.svg"} />
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
)(ScrollIndicator);