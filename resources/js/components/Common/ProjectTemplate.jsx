import React from 'react'
import styled from 'styled-components'
import ScrollIndicator from './ScrollIndicator'
import { constant } from "../../helper"
import TopIndicator from './TopIndicator';

const Title = styled.h1`
    font-size: 150px;
    letter-spacing: -9px;
    font-weight: 900;
    text-align: center;
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
    }

    p {
        font-size: 19px;
        letter-spacing: -1.14px;
        font-weight: normal;
        margin: 0px;
    }
`;

const Image = styled.img`
    width: 100%;
    margin: auto;
    display: block;
    max-width: ${constant.maxWidth + "px"};
`;

const Info = styled.div`
    padding: 150px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    display: block;
    max-width: ${constant.maxWidth + "px"};
    
    h3 {
        font-size: 28px;
        font-weight: bold;
        letter-spacing: -1.68px;
        text-transform: uppercase;
    }

    p {
        font-size: 20px;
        letter-spacing: -1.2px;
        font-weight: 300;
        margin: 50px 0px;
    }
`;

const TopContainer = styled.div`
    width: 100%;
    margin: 75px auto 0px auto;
    display: flex;
    max-width: ${constant.maxWidth + "px"};
    justify-content: end;
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
        {fieldDesc.map((paragraph) => (
            <p>{paragraph}</p>
        ))}
    </Info>
)

function ProjectTemplate({ data }) {
    return (
        <div>
            <Title>{data.title}</Title>

            <ScrollContainer>
                <ScrollIndicator />
            </ScrollContainer>

            <DetailsContainer>
                <DetailTemplate fieldDesc={data.details[0]} fieldTitle="serviço" />
                <DetailTemplate />
                <DetailTemplate fieldDesc={data.details[1]} fieldTitle="cliente" />
                <DetailTemplate fieldDesc={data.details[2]} fieldTitle="ano" />

            </DetailsContainer>

            <Image src={data.images[2]} alt="project cover" loading='eager' />

            <InformationTemplate
                fieldTitle="descrição"
                fieldDesc={data.description}
            />

            <Image src={data.images[1]} alt="description" loading='lazy' />

            <InformationTemplate
                fieldTitle="conceito"
                fieldDesc={data.concept}
            />

            <Image src={data.images[2]} alt="concept" loading='lazy' />

            <TopContainer>
                <TopIndicator />
            </TopContainer>

        </div>
    )
}

export default ProjectTemplate