import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function Eleven() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/portfolio");

    return (
        <ProjectTemplate
            data={{
                title: "ELEVEN",
                details: [text.eleven.service, "São Vicente", "2022"],
                images: [
                    "/image/portfolio/eleven/01.jpg",
                    "/image/portfolio/eleven/02.jpg",
                    "/image/portfolio/eleven/03.jpg"
                ],
                description: text.eleven.service,
            }}
        />
    )
}

export default Eleven