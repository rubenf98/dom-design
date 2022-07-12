import React from 'react'
import TeamMemberTemplate from '../Common/TeamMemberTemplate'

function Michael() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/team");

    return (
        <TeamMemberTemplate
            sections={text.sections}
            data={{
                title: "louis michael",
                previous: "",
                next: { name: "carolina andrade", link: "carolina" },
                image: "/image/team/michael",
                about: {
                    title: text.michael.position,
                    paragraphs: text.michael.description,
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
                    { title: "universidade da madeira", subtitle: "International master of interactive media design", date: "2020-2022" },
                    { title: "universidade da madeira", subtitle: "Design", date: "2015-2019" },
                    { title: "escola b+s d. lucinda andrade", subtitle: "Artes visuais", date: "2011-2014" },
                ],
                work: [
                    { title: "iti - mtl", subtitle: "Modelador 3D", date: "2021-2022" },
                    { title: "miti - largescale", subtitle: "Designer", date: "2019-2021" },
                    { title: "dom design", subtitle: "Designer / modelador 3D", date: "2019-2022" },
                ],
            }}
        />
    )
}

export default Michael