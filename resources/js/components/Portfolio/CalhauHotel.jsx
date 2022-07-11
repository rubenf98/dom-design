import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function CalhauHotel() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/portfolio");

    return (
        <ProjectTemplate
            data={{
                title: "P. Mediterrâneo",
                details: [text.posada_mediterraneo.service, "São Vicente", "2021"],
                images: [
                    "/image/portfolio/hotel_calhau/02.jpg",
                    "/image/portfolio/hotel_calhau/03.jpg",
                    "/image/portfolio/hotel_calhau/05.jpg"
                ],
                description: text.posada_mediterraneo.concept,
            }}
        />
    )
}

export default CalhauHotel