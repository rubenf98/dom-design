import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { constant, dimensions } from '../helper';
import { ThemeContext } from 'styled-components'
import AnimationContainer from './Common/AnimationContainer';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    display: block;
    max-width: ${constant.maxWidth + "px"};
    margin: auto;
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 5vw;
    letter-spacing: -4.08px;
    font-weight: 900;
    text-align: center;
    padding: 20px 30px;
    box-sizing: border-box;

    @media (min-width: ${dimensions.xxl}) {
        font-size: 102px;
    }



    @media (max-width: ${dimensions.md}) {
        font-size: 32px;
        letter-spacing: -1.16px;
    }

`;

const TeamContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Member = styled.div`
    width: 50%;
    margin: auto;
    display: block;
    max-width: 500px;
    padding: 0px 40px;
    box-sizing: border-box;
    

    img {
            filter: grayscale(1);
            transition: all .5s ease-in-out;

            @media (max-width: ${dimensions.md}) {
                filter: grayscale(0);
    }
        }

    &:hover {
        img {
            filter: grayscale(0);
        }
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 0px 30px;
    }

    .profile {
        width: 100%;
        margin-bottom: 40px;
    }
    a {
        text-decoration: none;
    }

    h3, p {
        text-decoration: none;
        text-align: center;
        color: ${props => props.theme.text};
    }

    h3 {
        font-size: 44px;
        letter-spacing: -2.64px;
        font-weight: 900; 
        margin: 0px;
        white-space: nowrap;
    }

    p {
        margin: 10px 0px;
        font-size: 28px;
        letter-spacing: -1.68px;
        font-weight: 300; 
        text-transform: uppercase;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0px 100px 0px;
    

    a {
        display: inline;
        margin: 0px 9px 0px 9px;

        img {
            opacity: .25;
            width: 25px;

            &:hover {
                opacity: 1;
            }
        }
    }

    
`;

const teamMember = [
    {
        to: "/team/michael", name: "louis michael", job: "designer 3d", image: "/image/team/michael", social:
        {
            facebook: "https://www.facebook.com/michael.sousa.967",
            instagram: "https://www.instagram.com/louismichaelsousa/",
            linkedin: "https://www.linkedin.com/in/louisousa/"
        }

    },
    {
        to: "/team/carolina", name: "carolina andrade", job: "interior designer", image: "/image/team/carolina", social:
        {
            facebook: "https://www.facebook.com/caroliina.s.andrade",
            instagram: "https://www.instagram.com/carolii_andrade/",
            linkedin: "https://www.linkedin.com/in/carolina-andrade-81a80a18a/"
        }

    }
]
function Team({ theme }) {
    const themeContext = useContext(ThemeContext);
    const imageSource = "image/team/";
    return (
        <Container>
            <AnimationContainer animateIn="fadeInUp" offset={0}>
                <Title>

                    A equipa incrível por trás da nossa empresa.

                </Title>
            </AnimationContainer>

            <TeamContainer>
                {teamMember.map((member, index) => (
                    <Member theme={themeContext} key={index}>
                        <Link to={member.to}>
                            <AnimationContainer animateIn="fadeInUp">
                                <picture>
                                    <source srcSet={member.image + ".jpg"} type="image/jpg" />
                                    <img className='profile' src={member.image + ".webp"} alt="profile" loading="eager" />
                                </picture>
                            </AnimationContainer>
                            <AnimationContainer animateIn="fadeIn">
                                <h3>{member.name}</h3>
                            </AnimationContainer>
                            <AnimationContainer animateIn="fadeIn">
                                <p>{member.job}</p>
                            </AnimationContainer>
                        </Link>
                        <AnimationContainer animateIn="fadeInUp">
                            <SocialContainer>
                                <a rel="noreferrer noopener" target="_blank" href={member.social.facebook}>
                                    <img src={theme == "light" ? imageSource + "light_facebook.svg" : imageSource + "dark_facebook.svg"} alt="facebook" loading="lazy" />
                                </a>

                                <a rel="noreferrer noopener" target="_blank" href={member.social.instagram}>
                                    <img src={theme == "light" ? imageSource + "light_instagram.svg" : imageSource + "dark_instagram.svg"} alt="instagram" loading="lazy" />
                                </a>

                                <a rel="noreferrer noopener" target="_blank" href={member.social.linkedin}>
                                    <img src={theme == "light" ? imageSource + "light_linkedin.svg" : imageSource + "dark_linkedin.svg"} alt="linkedin" loading="lazy" />
                                </a>
                            </SocialContainer>
                        </AnimationContainer>
                    </Member>
                ))}

            </TeamContainer>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
    };
};



export default connect(
    mapStateToProps,
    null
)(Team); 