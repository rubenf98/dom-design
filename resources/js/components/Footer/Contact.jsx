import React, { useContext } from 'react'
import { constant, dimensions } from '../../helper';
import styled, { ThemeContext } from 'styled-components'
import AnimationContainer from '../Common/AnimationContainer';
import ButtonAnimation from '../Common/ButtonAnimation';



const Container = styled.div`
    background: ${props => props.background};
    color: ${props => props.text};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0px 100px;
    @media (max-width: ${dimensions.md}) {
        padding: 0px 30px;
    }
`;

const Content = styled.div`
    width: 100%;
    margin: auto;
    max-width: ${constant.maxWidth + "px"};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
`;

const Info = styled.div`
    width: 50%;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }

    h2 {
        text-transform: uppercase;
        font-size: 50px;
        letter-spacing: -3px;
        font-weight: 300;

        span {
            font-size: 79px;
            font-weight: 900;
            letter-spacing: -4.74px;
            display: block;

            @media (max-width: ${dimensions.md}) {
                font-size: 39px;
                letter-spacing: -1.5px;
            }
        }

        @media (max-width: ${dimensions.md}) {
            font-size: 25px;
            letter-spacing: -1.5px;
        }
    }

    h3 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 300;
        letter-spacing: -1.2px;
        margin: 30px 0px 70px 0px;

        @media (max-width: ${dimensions.md}) {
            font-size: 16px;
        }

        @media (max-width: ${dimensions.sm}) {
            font-size: 12px;
            letter-spacing: -.72px;
        }
    }

    h4 {
        font-size: 23px;
        font-weight: 300;
        letter-spacing: -1.38px;
        margin: 0px;
        text-transform: uppercase;

        @media (max-width: ${dimensions.md}) {
            font-size: 18px;
            letter-spacing: -1.08px;
        }
    }

    p {
        margin: 7px 0px 40px 0;
        font-size: 31px;
        font-weight: 900;
        letter-spacing: 1.55px;
        font-family: 'Poppins', sans-serif;

        &:last-child {
            margin-bottom:  0px;
        }

        @media (max-width: ${dimensions.md}) {
            font-size: 25px;
            letter-spacing: 1.25px;
        }
    }
`;

const Form = styled.div`
    width: 50%;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }

    .container {
        width: 90%;
        margin: auto;
        display: block;

        input, textarea{
            color: ${props => props.buttonBackground};
        }

        @media (max-width: ${dimensions.lg}) {
            width: 100%;
        }

        input, textarea  {
            width: 100%;
            padding: 20px;
            margin: 20px 0px;
            border: 0px;
            border-bottom: ${props => "1px solid " + props.borderColor};
            outline: none;
            background: transparent;
            box-sizing: border-box;

            &:focus, &:active, &:focus-visible {
                border-bottom: ${props => "2px solid " + props.borderColor};
            }

            &::placeholder {
                letter-spacing: -0.9px;
                font-size: 15px;
                color: ${props => props.text};
            }

        }

        input  {
            margin: 10px 0px;
        }

        textarea {
            margin: 60px 0px;
            resize: none;
        }
    }
`;


function Contact() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container id="Contact" background={themeContext.text} text={themeContext.background}>
            <Content>
                <Info>
                    <AnimationContainer animateIn="fadeInLeft">
                        <h2>vamos <span>falar.</span></h2>
                        <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h3>

                        <h4>EMAIL</h4>
                        <p>domdesign@outlook.pt</p>
                        <h4>numero de telemovel</h4>
                        <p>968137466</p>
                    </AnimationContainer>
                </Info>
                <Form buttonText={themeContext.text} buttonBackground={themeContext.background} borderColor={themeContext.background} text={themeContext.background}>
                    <div className='container'>
                        <AnimationContainer animateIn="fadeInUp">
                            <input placeholder='nome' />
                        </AnimationContainer>
                        <AnimationContainer animateIn="fadeInUp">
                            <input placeholder='email' />
                        </AnimationContainer>
                        <AnimationContainer animateIn="fadeInUp">
                            <textarea rows="6" placeholder='fale connosco' />
                        </AnimationContainer>
                        <AnimationContainer animateIn="fadeInUp">
                            <ButtonAnimation
                                background={themeContext.background}
                                color={themeContext.text}
                                text="enviar"
                            />
                        </AnimationContainer>
                    </div>
                </Form>

            </Content>
        </Container>
    )
}
export default Contact;