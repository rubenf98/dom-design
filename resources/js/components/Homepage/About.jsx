import React, { useContext } from 'react'
import styled, { keyframes, ThemeContext } from 'styled-components';
import Citation from './Citation';
import { constant, dimensions } from '../../helper';
import { Link } from 'react-router-dom';
import AnimationContainer from '../Common/AnimationContainer';
import ButtonAnimation from '../Common/ButtonAnimation';

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
    z-index: -1;

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
    display: flex;
    align-items: flex-end;
    position: relative;

    a {
        text-decoration: none;
    }

    img {
        
        height: 50vh;

        &:first-child {
            top: 0; right: 0px;
            width: 70%;
            object-fit: cover;
            position: absolute;
            
        }

        &:nth-child(2) {
            width: 50%;
            object-fit: cover;
            margin-top: 20vh;
            z-index: -1;
        }
    }

    div {
        margin-top: 20vh;
        margin-left: 80px;
        margin-bottom: auto;
    }
`;


function About() {
    const themeContext = useContext(ThemeContext);

    return (
        <div >
            <CitationContainer>
                <ScrollingRow stroke={themeContext.text} color={themeContext.background}>
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
            <AnimationContainer animateIn="fadeIn">
                <ImageContainer >

                    <img src="/image/about/brainstorming.jpg" alt="" />

                    <img src="/image/about/design.jpg" alt="" />



                    <Link to="/team">
                        <ButtonAnimation
                            background={themeContext.text}
                            color={themeContext.background}
                            text="sobre nós"
                        />

                    </Link>
                </ImageContainer>
            </AnimationContainer>
        </div>
    )
}

export default About;