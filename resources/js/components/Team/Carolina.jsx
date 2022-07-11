import React from 'react'
import TeamMemberTemplate from '../Common/TeamMemberTemplate'

function Carolina() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/team");

    return (
        <TeamMemberTemplate
            text={text.sections}
            data={{
                title: "carolina andrade",
                previous: { name: "louis michael", link: "michael" },
                next: "",
                image: "/image/team/carolina",
                about: {
                    title: text.carolina.position,
                    paragraphs: text.carolina.description,
                    social: {
                        facebook: "https://www.facebook.com/caroliina.s.andrade",
                        instagram: "https://www.instagram.com/carolii_andrade/",
                        linkedin: "https://www.linkedin.com/in/carolina-andrade-81a80a18a/"
                    }
                },
                skills: [
                    { title: "procreate", value: 90 },
                    { title: "illustrator", value: 70 },
                    { title: "blender", value: 60 }
                ],
                education: [
                    { title: "universidade da madeira", subtitle: "Design", date: "2020-2022" },
                    { title: "escola S. Francisco Franco", subtitle: "Arte e Multimedia", date: "2015-2019" },
                    { title: "escola b+s Gonçalves Zarco", subtitle: "Ciências e Tecnologias", date: "2011-2014" },
                ],
                work: [
                    { title: "jardim dos barreiros", subtitle: "Arquitetura paisagística", date: "2016-2022" },
                    { title: "dom design", subtitle: "Designer de Espaços", date: "2019-2021" },
                ],
            }}
        />
    )
}

export default Carolina