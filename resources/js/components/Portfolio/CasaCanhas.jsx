import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function CasaCanhas() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/portfolio");

    return (
        <ProjectTemplate
            data={{
                title: "Canhas Casa",
                details: [text.casa_canhas.service, "Ponta do Sol", "2022"],
                images: [
                    "/image/portfolio/casa_canhas/01.jpg",
                    "/image/portfolio/casa_canhas/02.jpg",
                    "/image/portfolio/casa_canhas/03.jpg",
                    "/image/portfolio/casa_canhas/05.jpg"
                ],
                description: text.casa_canhas.concept,
            }}
        />
    )
}

export default CasaCanhas