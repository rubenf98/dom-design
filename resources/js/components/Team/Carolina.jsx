import React from 'react'
import TeamMemberTemplate from '../Common/TeamMemberTemplate'

function Carolina() {
    return (
        <TeamMemberTemplate
            data={{
                title: "carolina andrade",
                previous: { name: "louis michael", link: "michael" },
                next: "",
                image: "/image/team/carolina",
                about: {
                    title: "designer de espaços",
                    paragraphs: [
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    ],
                    social: {
                        facebook: "https://www.facebook.com/caroliina.s.andrade",
                        instagram: "https://www.instagram.com/carolii_andrade/",
                        linkedin: "https://www.linkedin.com/in/carolina-andrade-81a80a18a/"
                    }
                },
                skills: [
                    { title: "modelador 3d", value: 90 },
                    { title: "designer UX/UI", value: 70 },
                    { title: "designer gráfico", value: 60 }
                ],
                education: [
                    { title: "universidade da madeira", subtitle: "International Master of Interactive Media Design", date: "2020-2022" },
                    { title: "universidade da madeira", subtitle: "Design", date: "2015-2019" },
                    { title: "escola b+s d. lucinda andrade", subtitle: "artes visuais", date: "2011-2014" },
                ],
                work: [
                    { title: "iti", subtitle: "Maritimo Traning Lab", date: "2021-2022" },
                    { title: "miti", subtitle: "Largescale", date: "2019-2021" },
                    { title: "dom design", subtitle: "designer / modelador", date: "2019-2022" },
                ],
            }}
        />
    )
}

export default Carolina