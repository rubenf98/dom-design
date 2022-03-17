import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import Citation from './Citation';
import { fetchTheme } from '../themes';
import { connect } from "react-redux";
import { constant, dimensions } from '../../helper';
import { Link } from 'react-router-dom';

const scroll = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
  }
`;

const ScrollingRow = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
    top: 0px;
    z-index: 1;

    p {
        animation: ${scroll} ;
        animation-duration: 25s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        will-change: transform;
        transform-style: preserve-3d;
        display: inline-block;
        margin: 100px 0px;
        text-transform: uppercase;
        font-size: 150px;
        font-weight: 900;
        color: ${props => props.color};
        text-shadow: ${props =>
        "-1px -1px 0 " + props.stroke +
        ",0   -1px 0 " + props.stroke +
        ",1px -1px 0 " + props.stroke +
        ",1px  0   0 " + props.stroke +
        ",1px  1px 0 " + props.stroke +
        ",0    1px 0 " + props.stroke +
        ",-1px  1px 0 " + props.stroke +
        ",-1px  0   0 " + props.stroke
    };
        &:after {
            content: "-";
            margin: 0px 50px;

            @media (max-width: ${dimensions.md}) {
                margin: 0px 25px;
            }
        }

        @media (max-width: ${dimensions.md}) {
            font-size: 40px;
        }
    }
`;

const CitationContainer = styled.div`
	z-index: 2;
    position: relative;
    box-sizing: border-box;
    padding: 25vh 0px;

    @media (max-width: ${dimensions.md}) {
        padding: 18vh 0px;
    }
`;

const ImageContainer = styled.div`
	width: 90%;
    max-width: ${constant.maxWidth + "px"};
    height: 70vh;
    margin: auto;
    display: block;
    position: relative;

    img {
        position: absolute;
        height: 50vh;

        &:first-child {
            top: 0; right: 0px;
            width: 70%;
            object-fit: cover;
        }

        &:nth-child(2) {
            bottom: 0; left: 0px;
            width: 50%;
            object-fit: cover;
        }
    }

    div {
        position: absolute;
        bottom: 0; right: 0;
        padding: 15px 60px;
        font-size: 36px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: -2.88px;

        @media (max-width: ${dimensions.md}) {
            padding: 10px 30px;
            font-size: 18px;
            letter-spacing: -1px;
        }
    }
`;


function About({ theme }) {
    const [scrollingTheme, setScrollingTheme] = useState({
        background: undefined,
        text: undefined,
    })

    useEffect(() => {
        var aTheme = fetchTheme(theme);

        setScrollingTheme({
            background: aTheme.background,
            text: aTheme.text,
        })
    }, [theme])


    return (
        <div >
            <CitationContainer>
                <ScrollingRow stroke={scrollingTheme.text} color={scrollingTheme.background}>
                    <p>design</p>
                    <p>interior</p>
                    <p>espaço</p>
                    <p>3d</p>
                    <p>inovação</p>
                    <p>design</p>
                    <p>interior</p>
                    <p>espaço</p>
                    <p>3d</p>
                    <p>inovação</p>
                </ScrollingRow>


                <Citation quote="a nossa missão envolve sempre tornar os lugares ainda mais especiais." />
            </CitationContainer>

            <ImageContainer >
                <img src="/image/about/brainstorming.jpg" alt="" />
                <img src="/image/about/design.jpg" alt="" />

                <Link to="/team">
                    <div style={{ color: scrollingTheme.background, background: scrollingTheme.text }}>
                        sobre nós
                    </div>
                </Link>
            </ImageContainer>
        </div>
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
)(About);