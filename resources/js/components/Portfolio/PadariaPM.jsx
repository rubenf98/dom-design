import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function PadariaPM() {
    return (
        <ProjectTemplate
            data={{
                title: "PADARIA PM",
                details: ["desenvolvimento de imagem 3D", "", "2022"],
                images: [
                    "/image/portfolio/padaria_luis/01.jpg",
                    "/image/portfolio/padaria_luis/02.jpg",
                    "/image/portfolio/padaria_luis/03.jpg"
                ],
                description: [
                    "Espaço comercial",
                    "Execução de projeto 3D l acompanhamento da obra"
                ],
                concept: [
                    "A proposta arquitectónica apresentada pela nossa equipa, resulta de um conceito estético e contemporâneo desenvolvido com a finalidade de criar um conjunto de experiências distintas, num único espaço.",
                    "O seu conceito, é direcionado ao conjunto de experiências ligados à gastronomia, que o espaço se propõe a oferecer. Todos os pormenores de decoração, desde a escolha do material de revestimento, dos padrões e das peças desenhadas À mão, contribuem para a essencia do local."
                ],
            }}
        />
    )
}

export default PadariaPM