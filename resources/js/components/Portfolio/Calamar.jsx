import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function Calamar() {
    return (
        <ProjectTemplate
            data={{
                title: "CALAMAR",
                details: ["decoração e imagem 3D", "", "2021"],
                images: [
                    "/image/portfolio/calamar/01.jpg",
                    "/image/portfolio/calamar/02.jpg",
                    "/image/portfolio/calamar/03.jpg"
                ],
                description: [
                    "Proposta de remodelação de zona destinada a Restauração.",
                    "Decoração | 3D | Acompanhamento da obra"
                ],
                concept: [
                    "Projeto destinado à área da Restauração, interligando o conceito do menu  à própria decoração do Espaço.",
                    "Através do detalhe na escolha dos materiais/textura, mobiliário moderno e tons pastéis, concebemos um espaço que dispõe um local acolhedor."
                ],
            }}
        />
    )
}

export default Calamar