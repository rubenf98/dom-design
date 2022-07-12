import React, { useContext, useState, useEffect, useRef } from 'react'
import { constant, getCarouselBreakpoints, dimensions } from '../../helper';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components'
import AnimationContainer from '../Common/AnimationContainer';

const Container = styled.div`
    margin: 20vh 0px 20vh ${constant.horizontalPadding + "px"};
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        margin-left: 0px;
    }
    
`;

const Title = styled.h2`
    font-size: 102px;
    font-weight: 900;
    margin-bottom: 0px;
    z-index: 2;
    position: relative;

    @media (max-width: ${dimensions.md}) {
        font-size: 82px;
        text-align: center;
        margin-bottom: 40px;
    }
`;

const CarouselContainer = styled(Carousel)`
    min-height: 300px;
    width: 100%;

    .image-item {
        padding-right: 50px;

        @media (max-width: ${dimensions.sm}) {
            padding: 0px;
        }
    }
`;

const Item = styled.div`
    width: 100%;
    z-index: 1;
   

    .image-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 0px;
        padding-top: 120%;
        background: ${props => "url(" + props.background + ")"};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: scale 1s ease-in-out;

        @media (min-width: ${dimensions.md}) {
            &:hover {
                scale: 1.1;
                .overlay {
                    opacity: .5;
                }
            }
        }

        @media (min-width: ${dimensions.md}) {
            &:hover {
                scale: 1.1;
                .overlay {
                    opacity: .5;
                }
            }
        }

        .overlay {
            position: absolute;
            background-image: ${props => "linear-gradient(to bottom, rgba(255, 255, 255, 0), " + props.backgroundWithOpacity + " 80%, " + props.backgroundcolor + ")"};
            top: 0; bottom: 0;left: 0%; right: 0;
            width: 100%;
            height: 100%;
            transition: opacity .5s ease-in-out;
            opacity: 1;
        }
    }

    


    .info {
        position: absolute;
        bottom: 20px;left: 20px;
        color: ${props => props.textColor};

        h3 {
            font-size: 28px;
            letter-spacing: 1.4px;
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 0px;
        }

        p {
            margin: 0px;
            font-size: 24px;
            letter-spacing: -1.2px;
            font-weight: 300;
        }
    }

`;

function Portfolio({ text }) {
    const themeContext = useContext(ThemeContext);
    const [mousePosition, setMousePosition] = useState(undefined);
    const carouselRef = useRef(null);

    useEffect(() => {
        const DOM = document.getElementById("Portfolio");

        const setFromEvent = (e) => setMousePosition(e.clientX / window.innerWidth);

        DOM.addEventListener("mousemove", setFromEvent);

        return () => {
            DOM.removeEventListener("mousemove", setFromEvent);
        };

    }, []);

    useEffect(() => {
        if (mousePosition && carouselRef) {
            if (mousePosition > .9) {
                carouselRef.current.next();
            } else if (mousePosition < .15) {
                carouselRef.current.previous();
            }
        }
    }, [mousePosition]);

    return (
        <Container id="Portfolio">
            <AnimationContainer animateIn="fadeIn">
                <Title>{text.portfolio}</Title>
            </AnimationContainer>

            <CarouselContainer
                autoPlay={false}
                interval={2000000000}
                autoPlaySpeed={2000000000}
                arrows={false}
                draggable={false}
                itemClass="image-item"
                partialVisible
                swipeable
                transitionDuration={700}
                responsive={getCarouselBreakpoints([1, 1, 2, 2, 2])}
                ref={carouselRef}
            >
                {text.portfolioItems.map((item, index) => (
                    <AnimationContainer key={index} animateIn="fadeInRight">
                        <Link to={item.to}>
                            <Item
                                textColor={themeContext.text}
                                background={item.image}
                                backgroundWithOpacity={themeContext.backgroundWithOpacity}
                                backgroundcolor={themeContext.background}
                            >

                                <div className='image-container'>
                                    <div className='overlay' />
                                </div>

                                <div className='info' >
                                    <h3>{item.title}</h3>
                                    <p>{item.category}</p>
                                </div>
                            </Item>
                        </Link>
                    </AnimationContainer>
                ))}
            </CarouselContainer>

        </Container>
    )
}

export default Portfolio