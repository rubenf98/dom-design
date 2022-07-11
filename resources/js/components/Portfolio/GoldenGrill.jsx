import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function GoldenGrill() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/portfolio");

    return (
        <ProjectTemplate
            data={{
                title: "GOLDEN GRILL",
                details: [text.golden_grill.service, "Funchal", "2021"],
                images: [
                    "/image/portfolio/golden_grill/01.jpg",
                    "/image/portfolio/golden_grill/02.jpg",
                    "/image/portfolio/golden_grill/03.jpg"
                ],
                description: text.golden_grill.concept,
            }}
        />
    )
}

export default GoldenGrill