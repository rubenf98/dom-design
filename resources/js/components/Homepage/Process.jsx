import React from 'react'
import styled from 'styled-components'
import { text } from '../../assets/en/homepage';
import { constant, dimensions } from "../../helper"
import AnimationContainer from '../Common/AnimationContainer';

const Container = styled.div`
    width: 90%;
    display: block;
    max-width: ${constant.maxWidth + "px"};
    margin: 10vh auto 20vh auto;
    
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .fadeInLeft {
        width: 70%;
        h2 {
            font-size: 80px;
        font-weight: 900;
        line-height: 0.74;
        letter-spacing: -0.16px;
        margin: 0px;

        @media (max-width: ${dimensions.md}) {
            font-size: 40px;
        }
        }
        @media (max-width: ${dimensions.lg}) {
            width: 100%;
            margin-bottom: 20px;
        }
        
    }

    .fadeInRight  {
        width: 30%;
        p {
            margin: 0px;
            font-size: 20px;
            line-height: 1.45;
            letter-spacing: -1.2px;
            font-weight: 300;

            @media (max-width: ${dimensions.md}) {

                font-size: 16px;
            }
        }


        @media (max-width: ${dimensions.lg}) {
            width: 100%;
        }
    }
    
`;

const StepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const Step = styled.div`
    width: 33%;
    padding: 40px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.lg}) {
        width: 50%;
        padding: 10px;
    }

    h3, h4, h5 {
        margin: 0px;
    }

    h3 {
        text-align: center;
        font-size: 203px;
        font-weight: bold;
        letter-spacing: -0.41px;
        line-height: auto;

        @media (max-width: ${dimensions.md}) {
            font-size: 69px;
            text-align: left;
        }
    }

    h4 {
        font-size: 39px;
        font-style: italic;
        font-weight: 900;
        letter-spacing: -0.08px;

        @media (max-width: ${dimensions.md}) {
            font-size: 13px;
        }
    }

    h5 {
        font-size: 31px;
        font-weight: 300;
        letter-spacing: -0.06px;

        @media (max-width: ${dimensions.md}) {
            font-size: 9px;
        }
    }

    p {
        @media (max-width: ${dimensions.md}) {
            font-size: 13px;
        }
    }
`;

function Process({ text }) {
    return (
        <Container>
            <TitleContainer>
                <AnimationContainer animateIn="fadeInLeft" >
                    <h2>{text.title}</h2>
                </AnimationContainer>
                <AnimationContainer animateIn="fadeInRight" >
                    <p>{text.subtitle}</p>
                </AnimationContainer>
            </TitleContainer>
            <StepsContainer>

                <Step>
                    <AnimationContainer animateIn="fadeInUp">
                        <h3>01.</h3>
                        <h5>{text.steps[0].title} 1</h5>
                        <h4>{text.steps[0].subtitle}</h4>
                        <p>{text.steps[0].description}</p>
                    </AnimationContainer>
                </Step>
                <Step>
                    <AnimationContainer animateIn="fadeInUp" delay={100}>
                        <h3>02.</h3>
                        <h5>{text.steps[1].title} 2</h5>
                        <h4>{text.steps[1].subtitle}</h4>
                        <p>{text.steps[1].description}</p>
                    </AnimationContainer>
                </Step>
                <Step>
                    <AnimationContainer animateIn="fadeInUp" delay={200}>
                        <h3>03.</h3>
                        <h5>{text.steps[2].title} 3</h5>
                        <h4>{text.steps[2].subtitle}</h4>
                        <p>{text.steps[2].description}</p>
                    </AnimationContainer>
                </Step>
            </StepsContainer>
        </Container>
    )
}

export default Process