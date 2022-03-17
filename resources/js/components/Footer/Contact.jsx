import React, { useContext } from 'react'
import styled from 'styled-components'
import { constant } from '../../helper';
import { ThemeContext } from 'styled-components'

const Container = styled.div`
    background: ${props => props.background};
    color: ${props => props.text};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const Content = styled.div`
    width: 100%;
    margin: auto;
    max-width: ${constant.maxWidth + "px"};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const Info = styled.div`
    width: 50%;

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
        }
    }

    h3 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 300;
        letter-spacing: -1.2px;
        margin: 30px 0px 70px 0px;
    }

    h4 {
        font-size: 23px;
        font-weight: 300;
        letter-spacing: -1.38px;
         margin: 0px;
         text-transform: uppercase;
    }

    p {
        margin: 7px 0px 40px 0;
        font-size: 31px;
        font-weight: 900;
        letter-spacing: 1.55px;

        &:last-child {
            margin-bottom:  0px;
        }
    }
`;

const Form = styled.div`
    width: 50%;

    .container {
        width: 90%;
        margin: auto;
        display: block;

        input, textarea  {
            width: 100%;
            padding: 20px;
            margin: 20px 0px;
            border: 0px;
            border-bottom: ${props => "1px solid " + props.borderColor};
            outline: none;
            background: transparent;

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

        button {
            font-size: 38px;
            letter-spacing: -2.28px;
            font-weight: 900;
            padding: 10px 50px;
            box-sizing: border-box;
            cursor: pointer;
            filter: invert(1);
            border-radius: 0px;
        }
    }
`;

function Contact() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container id="Contact" background={themeContext.text} text={themeContext.background}>
            <Content>
                <Info>
                    <h2>vamos <span>falar.</span></h2>
                    <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h3>

                    <h4>EMAIL</h4>
                    <p>domdesign@outlook.pt</p>
                    <h4>numero de telemovel</h4>
                    <p>968137466</p>
                </Info>
                <Form borderColor={themeContext.background} text={themeContext.background}>
                    <div className='container'>
                        <input placeholder='nome' />
                        <input placeholder='email' />
                        <textarea rows="6" placeholder='fale connosco' />
                        <button type="submit">enviar</button>
                    </div>
                </Form>

            </Content>
        </Container>
    )
}
export default Contact;