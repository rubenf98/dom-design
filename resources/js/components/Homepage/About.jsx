import React, { useContext } from 'react'
import styled, { keyframes, ThemeContext } from 'styled-components';
import Citation from './Citation';
import { constant, dimensions } from '../../helper';
import { Link } from 'react-router-dom';
import AnimationContainer from '../Common/AnimationContainer';
import ButtonAnimation from '../Common/ButtonAnimation';
import { text } from '../../assets/en/homepage';

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
    padding: 25vh 0px 10vh 0px;

    @media (max-width: ${dimensions.md}) {
        padding: 18vh 0px;
    }
`;

const ImageContainer = styled.div`
	width: 60%;
    max-width: ${constant.maxWidth + "px"};
    min-height: 70vh;
    margin: auto;
    display: flex;
    align-items: flex-end;
    position: relative;
    flex-wrap: wrap;
    padding: 0px 30px ;
    box-sizing: border-box;

    @media (max-width: ${dimensions.lg}) {
        width: 80%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    a {
        text-decoration: none;

        @media (max-width: ${dimensions.lg}) {
                flex-grow: 1
        }
    }

    img {
        height: 50vh;
        width: 55%;
        object-fit: cover;

        @media (max-width: ${dimensions.lg}) {
            height: 40vh;
            width: 70%;
        }

        @media (max-width: ${dimensions.md}) {
            height: 30vh;
        }

        &:first-child {
            top: 0; right: 0px;
            position: absolute;
            z-index: -1;
            @media (max-width: ${dimensions.lg}) {
                right: 30px;
            }
        }

        &:nth-child(2) {       
            margin-top: 20vh;
            
            padding-right: 50px;
        }
    }

    div {
        margin: 20vh auto auto auto;

        @media (max-width: ${dimensions.lg}) {
            margin: 40px auto 0px auto;
        }
    }
`;


function About() {
    const themeContext = useContext(ThemeContext);

    return (
        <div >
            <CitationContainer>
                <ScrollingRow stroke={themeContext.text} color={themeContext.background}>
                    <p>{text.slider[0]}</p>
                    <p>{text.slider[1]}</p>
                    <p>{text.slider[2]}</p>
                    <p>{text.slider[3]}</p>
                    <p>{text.slider[4]}</p>
                    <p>{text.slider[0]}</p>
                    <p>{text.slider[1]}</p>
                    <p>{text.slider[2]}</p>
                    <p>{text.slider[3]}</p>
                    <p>{text.slider[4]}</p>
                </ScrollingRow>


                <Citation quote={text.citations[1]} />
            </CitationContainer>
            <AnimationContainer animateIn="fadeIn">
                <ImageContainer >

                    <img src="/image/about/design.jpg" alt="" />

                    <img src="/image/about/brainstorming.jpg" alt="" />



                    <Link to="/team">
                        <ButtonAnimation
                            background={themeContext.text}
                            color={themeContext.background}
                            text={text.about}
                        />

                    </Link>
                </ImageContainer>
            </AnimationContainer>
        </div>
    )
}

export default About;