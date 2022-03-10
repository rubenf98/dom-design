import React from 'react'
import styled from 'styled-components'
import { constant } from "../../helper"

const Container = styled.div`
    width: 90%;
    display: block;
    max-width: ${constant.maxWidth + "px"};
    margin: 20vh auto;
    
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;

    h2 {
        width: 70%;
        font-size: 80px;
        font-weight: 900;
        line-height: 0.74;
        letter-spacing: -0.16px;
        margin: 0px;
    }

    p {
        margin: 0px;
        width: 30%;
        font-size: 20px;
        line-height: 1.45;
        letter-spacing: -1.2px;
        font-weight: 300;
    }
    
`;

const StepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

const Step = styled.div`
    width: 33%;
    padding: 40px;
    box-sizing: border-box;

    h3, h4, h5 {
        margin: 0px;
    }

    h3 {
        text-align: center;
        font-size: 203px;
        font-weight: bold;
        letter-spacing: -0.41px;
        line-height: auto;
    }

    h4 {
        font-size: 39px;
        font-style: italic;
        font-weight: 900;
        letter-spacing: -0.08px;
    }

    h5 {
        font-size: 31px;
        font-weight: 300;
        letter-spacing: -0.06px;
    }
`;

function Process() {
    return (
        <Container>
            <TitleContainer>
                <h2>Um processo de três etapas simples, mas eficaz.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus vitae viverra tellus eget dignissim erat risus ultricies rhoncus non eget at.</p>
            </TitleContainer>
            <StepsContainer>
                <Step>
                    <h3>01.</h3>
                    <h5>Passo 1</h5>
                    <h4>Idea do Projeto</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus vitae viverra tellus eget dignissim erat risus ultricies rhoncus non eget at.</p>
                </Step>
                <Step>
                    <h3>02.</h3>
                    <h5>Passo 2</h5>
                    <h4>Brainstorming</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus vitae viverra tellus eget dignissim erat risus ultricies rhoncus non eget at.</p>
                </Step>
                <Step>
                    <h3>03.</h3>
                    <h5>Passo 3</h5>
                    <h4>Execução</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus vitae viverra tellus eget dignissim erat risus ultricies rhoncus non eget at.</p>
                </Step>
            </StepsContainer>
        </Container>
    )
}

export default Process