import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function Elleven() {
    return (
        <ProjectTemplate
            data={{
                title: "ELLEVEN",
                details: ["design de espaços", "351 empresa", "2021"],
                images: [
                    "/image/portfolio/elleven/01.jpg",
                    "/image/portfolio/elleven/02.jpg",
                    "/image/portfolio/elleven/03.jpg"
                ],
                description: [
                    "Espaço comercial - Cabeleireiro",
                    "Execução de projeto 3D"
                ],
                concept: [],
            }}
        />
    )
}

export default Elleven