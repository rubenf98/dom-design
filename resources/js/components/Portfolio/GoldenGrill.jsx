import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function GoldenGrill() {
    return (
        <ProjectTemplate
            data={{
                title: "GOLDEN GRILL",
                details: ["desenvolvimento de imagem 3D", "", "2021"],
                images: [
                    "/image/portfolio/golden_grill/01.jpg",
                    "/image/portfolio/golden_grill/02.jpg",
                    "/image/portfolio/golden_grill/03.jpg"
                ],
                description: [
                    "Intervenção de espaço de Restauração - Hamburgaria",
                    "Projeção 3D l Decoração l Acompanhamento da Obra"
                ],
                concept: [
                    "Espaço totalmente remodelado, com o objetivo de manter o conceito do antigo espaço - ar livre - porem, com uma nova imagem visual.",
                    "Definido com diferentes materiais, sendo o mais predominante a madeira, juntamente com um conjunto de cores quentes ao longo do espaço de restauração, proporcionando um ambiente acolhedor."
                ],
            }}
        />
    )
}

export default GoldenGrill