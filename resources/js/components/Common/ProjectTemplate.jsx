import React from 'react'
import styled from 'styled-components'
import ScrollIndicator from './ScrollIndicator'
import { constant, dimensions } from "../../helper"
import TopIndicator from './TopIndicator';

const Title = styled.h1`
    font-size: 150px;
    letter-spacing: -9px;
    font-weight: 900;
    text-align: center;

    @media (max-width: ${dimensions.md}) {
        font-size: 51px;
        letter-spacing: -3px;
    }
`;

const ScrollContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0px 130px 0px;
`;

const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin: auto;
    max-width: ${constant.maxWidth + "px"};
    margin-bottom: 175px;

    @media (max-width: ${dimensions.md}) {
        margin-bottom: 75px;
        width: 100%;
        padding: 0px 30px;
        box-sizing: border-box;
    }
`;

const Detail = styled.div`
    padding: 10px;
    box-sizing: border-box;
    
    h3 {
        font-size: 25px;
        letter-spacing: 1.25px;
        font-weight: 900;
        margin: 0px;
        text-transform: uppercase;

        @media (max-width: ${dimensions.md}) {
            font-size: 17px;
            letter-spacing: .85px;
        }
    }

        p {
            font-size: 19px;
            letter-spacing: -1.14px;
            font-weight: normal;
            margin: 0px;

            @media (max-width: ${dimensions.md}) {
                font-size: 13px;
                letter-spacing: -.8px;
            }
        }
    
        
`;

const Image = styled.img`
    width: 100%;
    margin: 75px auto;
    display: block;
    max-width: ${constant.maxWidth + "px"};
`;

const Info = styled.div`
    padding: 0px 150px 50px 150px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    display: block;
    max-width: ${constant.maxWidth + "px"};

    @media (max-width: ${dimensions.md}) {
        padding: 30px;
    }
    
    h3 {
        font-size: 28px;
        font-weight: bold;
        letter-spacing: -1.68px;
        text-transform: uppercase;
    }

    div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        p {
            width: 46%;
            text-align: justify;
            font-size: 22px;
            letter-spacing: -1.2px;
            line-height: 1.5;
            font-weight: 300;
            margin: 50px 0px;
            box-sizing: border-box;

            @media (max-width: ${dimensions.md}) {
                width: 100%;
                margin: 30px 0px;
            }
        }
    }

    
`;

const TopContainer = styled.div`
    width: 100%;
    margin: 75px auto 75px auto;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    max-width: ${constant.maxWidth + "px"};
    justify-content: end;

    @media (max-width: ${dimensions.lg}) {
        display: none;
    }
`;

const DetailTemplate = ({ fieldTitle, fieldDesc }) => (
    <Detail>
        <h3>{fieldTitle}</h3>
        <p>{fieldDesc}</p>
    </Detail>
)

const InformationTemplate = ({ fieldTitle, fieldDesc }) => (
    <Info>
        <h3>{fieldTitle}</h3>
        <div>
            {fieldDesc.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    </Info>
)

function ProjectTemplate({ data }) {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/portfolio");

    return (
        <div>
            <Title>{data.title}</Title>

            <ScrollContainer>
                <ScrollIndicator />
            </ScrollContainer>

            <DetailsContainer>
                <DetailTemplate fieldDesc={data.details[0]} fieldTitle={text.service} />
                <DetailTemplate />
                <DetailTemplate fieldDesc={data.details[1]} fieldTitle={text.place} />
                <DetailTemplate fieldDesc={data.details[2]} fieldTitle={text.year} />

            </DetailsContainer>

            <InformationTemplate
                fieldTitle={text.concept}
                fieldDesc={data.description}
            />

            <Image src={data.images[0]} alt="project cover" loading='eager' />

            <Image src={data.images[1]} alt="description" loading='lazy' />

            <Image src={data.images[2]} alt="concept" loading='lazy' />

            <TopContainer>
                <TopIndicator />
            </TopContainer>

        </div>
    )
}

export default ProjectTemplate