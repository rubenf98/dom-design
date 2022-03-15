import React, { useContext } from 'react'
import styled from 'styled-components'
import { constant } from "../../helper"
import { ThemeContext } from 'styled-components'

const TitleContainer = styled.div`
  display: flex;

    h1, .next, .previous {
        font-size: 102px;
        letter-spacing: -6.12px;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        align-items: center;
        flex: 1;
        display: flex;
        justify-content: center;
        margin: 0px;
        white-space:nowrap;

    }

    .next, .previous {
        opacity: .3;
    }

    .previous {
        margin-right: auto;
        text-align: left;

        p {
            margin-right: auto;
        }
    }

    .next {
        margin-left: auto;
        text-align: right;

        p {
            margin-left: auto;
        }
    }


`;

const Content = styled.div`
    width: 80%;
    margin: auto;
    max-width: ${constant.maxWidth + "px"};
    display: block;
`;

const SkillsContainer = styled.div`
    width: 70%;
    margin: auto;
    max-width: ${constant.maxWidth + "px"};
    margin-bottom: 175px;
`;

const Skill = styled.div`
    width: 100%;
    display: block;

    h3 {
        font-size: 35px;
        letter-spacing: -2.1px;
        font-weight: bold;
        margin: 20px 0px;
        text-transform: uppercase;
    }

    .value-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .bar {
            height: 10px;
            background: ${props => props.barBackground};
            width: ${props => props.width + "%"};
            
        }

        p {
            font-size: 30px;
            letter-spacing: -1.8px;
            font-weight: 300;
            padding-left: 30px;
            box-sizing: border-box;
            margin: 0px;
        }
    }

    
`;

const SkillsTitle = styled.h2`
    font-size: 102px;
    letter-spacing: -6.12px;
    font-weight: 900;
    text-transform: uppercase;
    color: ${props => props.color};
        text-shadow: ${props =>
        "-1px -1px 0 " + props.stroke +
        ",0   -1px 0 " + props.stroke +
        ",1px -1px 0 " + props.stroke +
        ",1px  0   0 " + props.stroke +
        ",1px  1px 0 " + props.stroke +
        ",0    1px 0 " + props.stroke +
        ",-1px  1px 0 " + props.stroke +
        ",-1px  0   0 " + props.stroke
    };
`;

const AboutTitle = styled.h2`
    font-size: 28px;
    letter-spacing: -1.68px;
    font-weight: 300;
    text-transform: uppercase;
`;

const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40vh;

    picture {
        width: 40%;
        img {
            width: 100%;
        }
    }

    .info-container {
        width: 50%;

        h3 {
            font-size: 28px;
            letter-spacing: -1.68px;
            font-weight: bold;
            margin-top: 0px;
            text-transform: uppercase;
        }

        .paragraph {
            letter-spacing: -1.2px;
            font-size: 20px;
            font-weight: 300;
            margin-bottom: 50px;
            line-height: 2.05;
        }

        .social-container {
            a {
                color:${props => props.color};
                text-decoration: none;
                text-transform: uppercase;
                font-size: 22px;
                letter-spacing: -1.36px;
                font-weight: 300;
                

                &:nth-child(2) {
                    margin: 0px 50px;
                }
            }
        }
                
    }
`;

const ExperienceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 250px;

    .item-container {
        width: 50%;
        padding: 0px 70px;
        box-sizing: border-box;

        h2 {
            font-size: 44px;
            letter-spacing: 4.4px;
            font-weight: 900;
            text-transform: uppercase;
        }

        .item {
            width: 100%;
            padding: 20px 0px;
            box-sizing: border-box;
            border-bottom: ${props => "1px solid " + props.borderColor};

            h3 {
                letter-spacing: -2.1px;
                font-size: 35px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .information-container {
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    font-size: 15px;
                    letter-spacing: -0.9px;
                    font-weight: 300;
                }
            }
        }
    }

    
`;


const SkillTemplate = ({ fieldTitle, fieldVal, themeContext }) => (
    <Skill barBackground={themeContext.text} width={fieldVal}>
        <h3>{fieldTitle}</h3>
        <div className='value-container'>
            <div className='bar' />
            <p>{fieldVal}%</p>
        </div>

    </Skill>
)

function TeamMemberTemplate({ data }) {
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <TitleContainer>
                <div className='previous'><p>{data.previous}</p></div>
                <h1>{data.title}</h1>
                <div className='next'><p>{data.next}</p></div>
            </TitleContainer>

            <Content>
                <AboutTitle>
                    about me
                </AboutTitle>
                <AboutContainer color={themeContext.text}>
                    <picture>
                        <source srcSet={data.image + ".jpg"} type="image/jpg" />
                        <img className='profile' src={data.image + ".webp"} alt="profile" loading="eager" />
                    </picture>

                    <div className='info-container'>
                        <h3>{data.about.title}</h3>

                        {data.about.paragraphs.map((paragraph, index) => (
                            <p className='paragraph' key={index}>{paragraph}</p>
                        ))}

                        <div className='social-container'>
                            <a target="_blank" href={data.about.social.facebook}>
                                facebook
                            </a>

                            <a target="_blank" href={data.about.social.instagram}>
                                instagram
                            </a>

                            <a target="_blank" href={data.about.social.linkedin}>
                                linkedin
                            </a>
                        </div>
                    </div>
                </AboutContainer>
                <SkillsTitle color={themeContext.background} stroke={themeContext.text}>
                    habilidades
                </SkillsTitle>

                <SkillsContainer>
                    {data.skills.map((skill, index) => (
                        <SkillTemplate themeContext={themeContext} key={index} fieldVal={skill.value} fieldTitle={skill.title} />
                    ))}
                </SkillsContainer>

                <ExperienceContainer borderColor={themeContext.text}>


                    <div className='item-container'>
                        <h2>educação</h2>
                        {data.education.map((item) => (
                            <div className='item'>
                                <h3>{item.title}</h3>
                                <div className='information-container'>
                                    <p className='subtitle'>{item.title}</p>
                                    <p className='date'>{item.date}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='item-container'>
                        <h2>trabalhos</h2>
                        {data.work.map((item) => (
                            <div className='item'>
                                <h3>{item.title}</h3>
                                <div className='information-container'>
                                    <p className='subtitle'>{item.title}</p>
                                    <p className='date'>{item.date}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </ExperienceContainer>

            </Content>

        </div>
    )
}
export default TeamMemberTemplate