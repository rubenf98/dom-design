import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function RestauranteFunchal() {
    return (
        <ProjectTemplate
            data={{
                title: "REST. FUNCHAL",
                details: ["desenvolvimento de imagem 3D", "", "2022"],
                images: [
                    "/image/portfolio/restaurante_francisco_funchal/01.jpg",
                    "/image/portfolio/restaurante_francisco_funchal/02.jpg",
                    "/image/portfolio/restaurante_francisco_funchal/03.jpg"
                ],
                description: [
                    "Intervenção de espaço de Restauração",
                    "Decoração | 3D | Acompanhamento da obra"
                ],
                concept: [
                    "Espaço para receber, é o conceito que este espaço possui através da escolha dos materiais e no contraste de diferentes tonalidades, projetadas no espaço, acompanhada com a frescura dos verdes da vegetação.",
                    "Atendendo à intervenção total para este espaço, incluímos o trabalho da nossa equipa para a execução, projeção e acompanhamento da obra em todas as fases, garantindo os melhores resultados"
                ],
            }}
        />
    )
}

export default RestauranteFunchal