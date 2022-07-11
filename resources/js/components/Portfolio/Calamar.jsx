import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function Calamar() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/portfolio");

    return (
        <ProjectTemplate
            data={{
                title: "Bar Calamar",
                details: [text.calamar.service, "São Vicente", "2021"],
                images: [
                    "/image/portfolio/calamar/01.jpg",
                    "/image/portfolio/calamar/02.jpg",
                    "/image/portfolio/calamar/03.jpg"
                ],
                description: text.calamar.concept,
            }}
        />
    )
}

export default Calamar