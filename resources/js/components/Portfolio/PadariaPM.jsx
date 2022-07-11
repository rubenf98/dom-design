import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function PadariaPM() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/portfolio");

    return (
        <ProjectTemplate
            data={{
                title: "PADARIA PM",
                details: [text.padaria_pm.service, "Porto Moniz", "2022"],
                images: [
                    "/image/portfolio/padaria_luis/01.jpg",
                    "/image/portfolio/padaria_luis/02.jpg",
                    "/image/portfolio/padaria_luis/03.jpg"
                ],
                description: text.padaria_pm.concept,
            }}
        />
    )
}

export default PadariaPM