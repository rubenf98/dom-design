import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

const Container = styled.div`
    cursor: pointer;
    display: ${props => props.inline ? "inline" : "block"} ;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0);
    transition: all .3s ease;

    &:hover {

            -webkit-text-stroke: ${props => "1px " + props.color};
            -webkit-text-fill-color: rgba(255, 255, 255, 0);
        
    }
`;

function UnderlineEffect({ children, inline = false, color }) {
    const themeContext = useContext(ThemeContext);


    return (
        <Container color={color ? color : themeContext.text} inline={inline}>

            {children}

        </Container>
    )
}

export default UnderlineEffect