import React from 'react'
import TeamMemberTemplate from '../Common/TeamMemberTemplate'

function Michael() {
    return (
        <TeamMemberTemplate
            data={{
                title: "louis michael",
                previous: "",
                next: { name: "carolina andrade", link: "carolina" },
                image: "/image/team/michael",
                about: {
                    title: "designer 3d",
                    paragraphs: [
                        "Olá! Chamo-me Louis Michael e sou licenciado em Design e Mestre em Design Media Interactivos.",
                        "Desde cedo tive grande paixão pelo 3D e de como era desenvolvido. Ao longo dos anos fui aprendendo, e criando diversos projectos no meu percurso académico, desde jogos, curtas-metragens e mais recentemente visualização 3D. Tento sempre que as nossas imagens 3D consigam ser o mais realistas possíveis transmitindo sempre o conceito pretendido aos clientes."
                    ],
                    social: {
                        facebook: "https://www.facebook.com/michael.sousa.967",
                        instagram: "https://www.instagram.com/louismichaelsousa/",
                        linkedin: "https://www.linkedin.com/in/louisousa/"
                    }
                },
                skills: [
                    { title: "blender", value: 90 },
                    { title: "photoshop", value: 70 },
                    { title: "unreal", value: 60 }
                ],
                education: [
                    { title: "universidade da madeira", subtitle: "International Master of Interactive Media Design", date: "2020-2022" },
                    { title: "universidade da madeira", subtitle: "Design", date: "2015-2019" },
                    { title: "escola b+s d. lucinda andrade", subtitle: "artes visuais", date: "2011-2014" },
                ],
                work: [
                    { title: "iti", subtitle: "Maritimo Training Lab", date: "2021-2022" },
                    { title: "miti", subtitle: "Largescale", date: "2019-2021" },
                    { title: "dom design", subtitle: "designer / modelador", date: "2019-2022" },
                ],
            }}
        />
    )
}

export default Michael