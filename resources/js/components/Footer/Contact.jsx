import React, { useContext, useState } from 'react'
import { constant, dimensions } from '../../helper';
import styled, { ThemeContext, keyframes, withTheme } from 'styled-components'
import AnimationContainer from '../Common/AnimationContainer';
import ButtonAnimation from '../Common/ButtonAnimation';
import axios from "axios";

const spin = keyframes`
  from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;


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

    .button-parent-container {

        .fadeInUp{
            @media (max-width: ${dimensions.md}) {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

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

const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    margin: -14px 0 0 -14px;

    .maskedCircle {
        width: 20px;
        height: 20px;
        border-radius: 12px;
        border: ${props => "3px solid " + props.background};
    }

    /* Spinning circle mask */
    .mask {
        width: 12px;
        height: 12px;
        overflow: hidden;
    }

    /* Spinner */
    .spinner {
        position: absolute;
        left: 1px;
        top: 1px;
        width: 26px;
        height: 26px;
        animation: ${spin} 1s infinite linear;
    }

`;

function Contact({ text }) {
    const [form, setForm] = useState({ name: undefined, email: undefined, text: undefined })
    const [messageState, setMessageState] = useState(0)
    const [loading, setLoading] = useState(false)
    const themeContext = useContext(ThemeContext);

    const onFinish = () => {
        setLoading(true);
        axios.post(`${window.location.origin}/api/contact`, form).then((response) => {
            if (response.status == 201) {
                setLoading(false);
                var fields = document.getElementsByClassName('contact-fields');

                Object.values(fields).map((field) => {
                    console.log(field);
                    field.value = field.defaultValue;
                })
                setMessageState(1);

                setTimeout(() => {
                    setForm({ name: undefined, email: undefined, text: undefined });
                }, 300);

                setTimeout(() => {
                    setMessageState(0);
                }, 3000);
            }

        }).catch(() => {
            setLoading(false);
        });



    };

    return (
        <Container id="Contact" background={themeContext.text} text={themeContext.background}>
            <Content>
                <Info>
                    <AnimationContainer animateIn="fadeInLeft">
                        <h2>{text.title}</h2>
                        <h3>{text.subtitle}</h3>

                        <h4>EMAIL</h4>
                        <p>domdesign@outlook.pt</p>
                        <h4>{text.phone}</h4>
                        <p>968137466</p>
                    </AnimationContainer>
                </Info>
                <Form buttonText={themeContext.text} buttonBackground={themeContext.background} borderColor={themeContext.background} text={themeContext.background}>
                    <div className='container'>
                        <AnimationContainer animateIn="fadeInUp">
                            <input className="contact-fields" placeholder={text.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </AnimationContainer>
                        <AnimationContainer animateIn="fadeInUp">
                            <input type="email" className="contact-fields" placeholder='email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </AnimationContainer>
                        <AnimationContainer animateIn="fadeInUp">
                            <textarea className="contact-fields" rows="6" placeholder={text.text} onChange={(e) => setForm({ ...form, text: e.target.value })} />
                        </AnimationContainer>
                        <div onClick={onFinish} className="button-parent-container">
                            <AnimationContainer animateIn="fadeInUp">
                                <ButtonAnimation
                                    background={themeContext.background}
                                    color={themeContext.text}
                                    text={loading ? <Loading background={themeContext.text}>
                                        <div class="loading">
                                            <div class="spinner">
                                                <div class="mask">
                                                    <div class="maskedCircle" />
                                                </div>
                                            </div>
                                        </div>
                                    </Loading> : text.submit[messageState]}
                                />
                            </AnimationContainer>
                        </div>
                    </div>
                </Form>

            </Content>
        </Container>
    )
}
export default Contact;