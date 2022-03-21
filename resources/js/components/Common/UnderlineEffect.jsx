import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

const Container = styled.div`
    position: relative;
    cursor: pointer;
    display: ${props => props.inline ? "inline" : "block"} ;

    &:hover {
        .underline {
            width: 100%;
        }
    }
`;

const Underline = styled.div`
    width: 0%;
    height: 2px;
    background: ${props => props.background};
    position: absolute;
    left: 0px; bottom: -5px;
    transition: width .3s ease-in-out;
`;

function UnderlineEffect({ children, inline = false }) {
    const themeContext = useContext(ThemeContext);


    return (
        <Container inline={inline}>
            {children}
            <Underline background={themeContext.text} className='underline' />
        </Container>
    )
}

export default UnderlineEffect