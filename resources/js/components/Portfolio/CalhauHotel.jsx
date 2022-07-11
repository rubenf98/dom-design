import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function CalhauHotel() {
    return (
        <ProjectTemplate
            data={{
                title: "CALHAU HOTEL",
                details: ["decoração e imagem 3D", "", "2021"],
                images: [
                    "/image/portfolio/hotel_calhau/02.jpg",
                    "/image/portfolio/hotel_calhau/03.jpg",
                    "/image/portfolio/hotel_calhau/05.jpg"
                ],
                description: [
                    "Reabilitação de uma estalagem.",
                    "Localizado no sítio do Calhau, São Vicente. Edifício construído por 3 pisos e áreas exteriores - piscina, zona da lazer e miradouro;"
                ],
                concept: [
                    "Atendendo ao meio envolvente da estalagem - mar e serra - transbordamos as suas tonalidades, para o interior do edifício.",
                    "Para este projeto acompanhamos desde o início,  todo o processo de recuperação, projeção de 3D, escolha dos materiais bem como da mobília, e de novas zonas de intervenção;    "
                ],
            }}
        />
    )
}

export default CalhauHotel