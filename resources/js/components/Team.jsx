import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { constant } from '../helper';
import { ThemeContext } from 'styled-components'

const Container = styled.div`
    width: 90%;
    display: block;
    max-width: ${constant.maxWidth + "px"};
    margin: auto;
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 102px;
    letter-spacing: -4.08px;
    font-weight: 900;
    text-align: center;
`;

const TeamContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Member = styled(Link)`
    width: 45%;
    margin: auto;
    display: block;
    max-width: 400px;
    text-decoration: none;

    .profile {
        width: 100%;
        margin-bottom: 40px;
    }

    h3, p {
        text-align: center;
        color: ${props => props.themeContext.text};
    }

    h3 {
        font-size: 44px;
        letter-spacing: -2.64px;
        font-weight: 900; 
        margin: 0px;
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
            width: 33px;
        }
    }

    
`;

const teamMember = [
    {
        to: "/team/michael", name: "louis michael", job: "designer 3d", image: "/image/team/placeholder", social:
            { facebook: "/sadsadsad", instagram: "/asdasdsa", linkedin: "/asdsadsad" }

    },
    {
        to: "/team/carolina", name: "carolina andrade", job: "interior designer", image: "/image/team/placeholder", social:
            { facebook: "/sadsadsad", instagram: "/asdasdsa", linkedin: "/asdsadsad" }

    }
]
function Team() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container>
            <Title>
                A equipa incrível por trás da nossa empresa.
            </Title>

            <TeamContainer>
                {teamMember.map((member, index) => (
                    <Member themeContext={themeContext} to={member.to} key={index}>
                        <picture>
                            <source srcSet={member.image + ".jpg"} type="image/jpg" />
                            <img className='profile' src={member.image + ".webp"} alt="profile" loading="eager" />
                        </picture>

                        <h3>{member.name}</h3>
                        <p>{member.job}</p>
                        <SocialContainer>
                            <a target="_blank" href={member.social.facebook}>
                                <img src="/image/team/facebook.svg" alt="facebook" loading="lazy" />
                            </a>

                            <a target="_blank" href={member.social.instagram}>
                                <img src="/image/team/instagram.svg" alt="instagram" loading="lazy" />
                            </a>

                            <a target="_blank" href={member.social.linkedin}>
                                <img src="/image/team/linkedin.svg" alt="linkedin" loading="lazy" />
                            </a>
                        </SocialContainer>

                    </Member>
                ))}

            </TeamContainer>
        </Container>
    )
}

export default Team