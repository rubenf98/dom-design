import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    cursor: pointer;
    font-size: 27px;
    line-height: 0.85;
    letter-spacing: -1.62px;

    img {
        width: 15px;
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