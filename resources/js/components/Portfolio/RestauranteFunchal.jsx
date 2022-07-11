import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function RestauranteFunchal() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/portfolio");

    return (
        <ProjectTemplate
            data={{
                title: "REST. FUNCHAL",
                details: [text.restaurante_funchal.service, "Funchal", "2022"],
                images: [
                    "/image/portfolio/restaurante_francisco_funchal/01.jpg",
                    "/image/portfolio/restaurante_francisco_funchal/02.jpg",
                    "/image/portfolio/restaurante_francisco_funchal/03.jpg"
                ],
                description: text.restaurante_funchal.concept,
            }}
        />
    )
}

export default RestauranteFunchal