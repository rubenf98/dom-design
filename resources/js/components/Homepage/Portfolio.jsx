import React from 'react'
import { constant, getCarouselBreakpoints } from '../../helper';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin: 20vh 0px 20vh ${constant.horizontalPadding + "px"};
    box-sizing: border-box;
    
`;

const Title = styled.h2`
    font-size: 102px;
    font-weight: 900;
    margin-bottom: 20px;
    z-index: 2;
    position: relative;
`;

const CarouselContainer = styled(Carousel)`
    min-height: 300px;
    width: 100%;

    .image-item {
        padding-right: 50px;
    }

    .react-multiple-carousel__arrow {
        z-index: 8 !important;
    }

`;

const Item = styled.div`
    width: 100%;
    z-index: 1;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }

    .overlay {
        position: absolute;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(56, 56, 56, 0.78) 78%, #000);
        top: 0; bottom: 0;left: 0%; right: 0;
        width: 100%;
        height: 100%;
    }
    .info {
        position: absolute;
        bottom: 20px;left: 20px;
        color:  white;

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


const items = [
    { title: "braseiro burguer", category: "restaurante", image: "/image/portfolio/placeholder.jpg", to: "/project/braseiro351" },
    { title: "lorem", category: "lorem", image: "/image/portfolio/placeholder.jpg", to: "lorem" },
    { title: "lorem", category: "lorem", image: "/image/portfolio/placeholder.jpg", to: "lorem" },
    { title: "lorem", category: "lorem", image: "/image/portfolio/placeholder.jpg", to: "lorem" },
    { title: "lorem", category: "lorem", image: "/image/portfolio/placeholder.jpg", to: "lorem" },
    { title: "lorem", category: "lorem", image: "/image/portfolio/placeholder.jpg", to: "lorem" },
]
function Portfolio() {
    return (
        <Container id="Portfolio">
            <Title>portfólio</Title>
            <CarouselContainer
                arrows={false}
                itemClass="image-item"
                partialVisible
                swipeable
                responsive={getCarouselBreakpoints([1, 1, 2, 2, 2])}
            >
                {items.map((item, index) => (
                    <Link to={item.to}>
                        <Item key={index} >
                            <div className='overlay' />
                            <img src={item.image} alt={item.title} />
                            <div className='info' >
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </Item>
                    </Link>
                ))}
            </CarouselContainer>

        </Container>
    )
}

export default Portfolio