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

function ProjectTemplate() {
    return (
        <div>
            <Title>Braseiro 351</Title>

            <ScrollContainer>
                <ScrollIndicator />
            </ScrollContainer>

            <DetailsContainer>
                <DetailTemplate fieldDesc="design de espaços" fieldTitle="serviço" />
                <DetailTemplate />
                <DetailTemplate fieldDesc="design de espaços" fieldTitle="serviço" />
                <DetailTemplate fieldDesc="design de espaços" fieldTitle="serviço" />

            </DetailsContainer>

            <Image src="/image/portfolio/placeholder.jpg" alt="sad" loading='eager' />

            <InformationTemplate
                fieldTitle="descrição"
                fieldDesc={[
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                ]}
            />

            <Image src="/image/portfolio/placeholder.jpg" alt="sad" loading='lazy' />

            <InformationTemplate
                fieldTitle="conceito"
                fieldDesc={[
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                ]}
            />

            <Image src="/image/portfolio/placeholder.jpg" alt="sad" loading='lazy' />

            <TopContainer>
                <TopIndicator />
            </TopContainer>

        </div>
    )
}

export default ProjectTemplate