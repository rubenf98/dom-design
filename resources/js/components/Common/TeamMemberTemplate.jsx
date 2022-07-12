import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { constant, dimensions } from "../../helper"
import { ThemeContext } from 'styled-components'
import AnimationContainer from './AnimationContainer';
import { Link } from 'react-router-dom';
import UnderlineEffect from './UnderlineEffect';

const scroll = keyframes`
  0% {
    transform: translate3d(-10vw, 0, 0);
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
  }
`;

const TitleContainer = styled.div`
    display: flex;

    h1, .next, .previous {
        font-size: 5vw;
        letter-spacing: -6px;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
       
        flex: 1;
        display: flex;
        justify-content: center;
        margin: 0px;
        white-space: wrap;
        padding: 0px;

        @media (max-width: ${dimensions.lg}) {
            letter-spacing: -1.9px;
        }

        @media (max-width: ${dimensions.sm}) {
            font-size: 32px;
        }

    }

    .next, .previous {
        opacity: .3;
        width: 25%;
        text-decoration: none;
        color: ${props => props.color};
    }

    h1 {
        width: 50%;
        align-items: center;
    }

    .previous {
        margin-right: auto;
        text-align: left;

        @media (max-width: ${dimensions.sm}) {
            transform: translate3d(-13vw, 0, 0);
        }

        p {
            margin-right: auto;
        }
    }

    .next {
        margin-left: auto;
        text-align: right;

        @media (max-width: ${dimensions.sm}) {
            transform: translate3d(13vw, 0, 0);
        }
        

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

const ScrollingRow = styled.div`
	display: flex;
	align-items: center;
    flex-wrap: nowrap;

    p {
        animation: ${scroll} ;
        animation-duration: 25s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        will-change: transform;
        transform-style: preserve-3d;
        display: inline-block;
        margin: 100px 0px;
        text-transform: uppercase;
        font-size: 150px;
        font-weight: 900;
        white-space: nowrap;
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
        &:after {
            content: "-";
            margin: 0px 50px;

            @media (max-width: ${dimensions.md}) {
                margin: 0px 25px;
            }
        }

        @media (max-width: ${dimensions.md}) {
            font-size: 40px;
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

    @media (max-width: ${dimensions.sm}) {
        font-size: 18px;
    }
`;

const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .fadeInLeft {
        width: 40%;

        @media (max-width: ${dimensions.lg}) {
            width: 100%;
            margin-bottom: 20px;
        }

        picture, img {
            width: 100%;
        }
    }
        
    .info-container {
        width: 50%;

        @media (max-width: ${dimensions.lg}) {
            width: 100%;
        }

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
            

            @media (max-width: ${dimensions.lg}) {
                display: flex;
                justify-content: space-around;
            }

            a {
                color:${props => props.color};
                text-decoration: none;
                text-transform: uppercase;
                font-size: 22px;
                letter-spacing: -1.36px;
                font-weight: 300;

                
                @media (max-width: ${dimensions.md}) {
                    font-size: 16px;
                }

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
    flex-wrap: wrap;
    margin: 120px 0px;

    @media (max-width: ${dimensions.md}) {
        margin: 0px 0px 50px 0px;
    }

    .item-container {
        width: 50%;
        padding: 0px 70px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.lg}) {
            padding: 0px 10px;
        }

        @media (max-width: ${dimensions.lg}) {
            width: 100%;
            padding: 0px;
            margin-bottom: 100px;
        }

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

                @media (max-width: ${dimensions.lg}) {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
            }

            .information-container {
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    font-size: 15px;
                    letter-spacing: -0.9px;
                    font-weight: 300;

                    @media (max-width: ${dimensions.lg}) {
                        margin: 0px 0px 5px 0px;
                    }
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

function TeamMemberTemplate({ data, sections }) {
    const themeContext = useContext(ThemeContext);
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/team");

    return (
        <div>
            <AnimationContainer animateIn="fadeIn">
                <TitleContainer color={themeContext.text}>

                    <Link to={"/team/" + data.previous.link} className='previous'><p>{data.previous.name}</p></Link>
                    <h1>{data.title}</h1>
                    <Link to={"/team/" + data.next.link} className='next'><p>{data.next.name}</p></Link>
                </TitleContainer>
            </AnimationContainer>

            <Content>
                <AboutTitle>
                    <AnimationContainer animateIn="fadeIn">
                        {text.subtitle}
                    </AnimationContainer>
                </AboutTitle>

                <AboutContainer color={themeContext.text}>
                    <AnimationContainer animateIn="fadeInLeft">
                        <picture>
                            <source srcSet={data.image + ".jpg"} type="image/jpg" />
                            <img className='profile' src={data.image + ".webp"} alt="profile" loading="eager" />
                        </picture>
                    </AnimationContainer>
                    <div className='info-container'>
                        <AnimationContainer animateIn="fadeInRight">
                            <h3>{data.about.title}</h3>

                            {data.about.paragraphs.map((paragraph, index) => (
                                <p className='paragraph' key={index}>{paragraph}</p>
                            ))}

                            <div className='social-container'>
                                <a rel="noreferrer noopener" target="_blank" href={data.about.social.facebook}>
                                    <UnderlineEffect inline> facebook </UnderlineEffect>
                                </a>
                                <a rel="noreferrer noopener" target="_blank" href={data.about.social.instagram}>
                                    <UnderlineEffect inline> instagram</UnderlineEffect>
                                </a>
                                <a rel="noreferrer noopener" target="_blank" href={data.about.social.linkedin}>
                                    <UnderlineEffect inline>linkedin</UnderlineEffect>
                                </a>
                            </div>
                        </AnimationContainer>
                    </div>

                </AboutContainer>

                <ScrollingRow stroke={themeContext.text} color={themeContext.background}>
                    {data.skills.map((skill, index) => (
                        <p key={index}>{skill.title}</p>
                    ))}
                    {data.skills.map((skill, index) => (
                        <p key={index + 5}>{skill.title}</p>
                    ))}
                </ScrollingRow>

                {false &&
                    <>
                        <SkillsTitle color={themeContext.background} stroke={themeContext.text}>
                            habilidades
                        </SkillsTitle>

                        <SkillsContainer>
                            {data.skills.map((skill, index) => (
                                <SkillTemplate themeContext={themeContext} key={index} fieldVal={skill.value} fieldTitle={skill.title} />
                            ))}
                        </SkillsContainer>
                    </>
                }


                <ExperienceContainer borderColor={themeContext.text}>


                    <div className='item-container'>
                        <AnimationContainer animateIn="fadeInUp">
                            <h2>{sections[0]}</h2>
                        </AnimationContainer>
                        {data.education.map((item, index) => (
                            <div key={index} className='item'>
                                <AnimationContainer animateIn="fadeInUp">
                                    <h3>{item.title}</h3>
                                    <div className='information-container'>
                                        <p className='subtitle'>{item.subtitle}</p>
                                        <p className='date'>{item.date}</p>
                                    </div>
                                </AnimationContainer>
                            </div>
                        ))}
                    </div>

                    <div className='item-container'>
                        <AnimationContainer animateIn="fadeInUp">
                            <h2>{sections[1]}</h2>
                        </AnimationContainer>
                        {data.work.map((item, index) => (
                            <div key={index} className='item'>
                                <AnimationContainer animateIn="fadeInUp">
                                    <h3>{item.title}</h3>
                                    <div className='information-container'>
                                        <p className='subtitle'>{item.subtitle}</p>
                                        <p className='date'>{item.date}</p>
                                    </div>
                                </AnimationContainer>
                            </div>
                        ))}
                    </div>
                </ExperienceContainer>

            </Content>

        </div>
    )
}
export default TeamMemberTemplate