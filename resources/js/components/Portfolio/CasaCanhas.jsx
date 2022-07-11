import React from 'react'
import ProjectTemplate from '../Common/ProjectTemplate'

function CasaCanhas() {
    return (
        <ProjectTemplate
            data={{
                title: "CASA CANHAS",
                details: ["desenvolvimento de imagem 3D", "", "2022"],
                images: [
                    "/image/portfolio/casa_canhas/01.jpg",
                    "/image/portfolio/casa_canhas/02.jpg",
                    "/image/portfolio/casa_canhas/03.jpg"
                ],
                description: [
                    "Projeção 3D | Decoração",
                ],
                concept: [
                    "Casa localizada numa paisagem excecional, numa encosta da Ilha da Madeira, tinha como principal desafio adaptar-se ao terreno e ao sei meio envolvente, minimizando o seu impacto visual. O seu conceito, que tem como base o reencontro do mar com a Natureza, é refletida no interior da casa nos mais pequenos detalhes",
                    "Deste modo, no primeiro andar toda a decoração iria conter as tonalidades de azul (oceano), contendo no segundo andar, tonalidades de verde (encosta)."
                ],
            }}
        />
    )
}

export default CasaCanhas