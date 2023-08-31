import React from 'react'
import BotoesFiltro from '../BotoesFiltro'

const Genero = () => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Gênero
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <BotoesFiltro/>
                </div>
            </div>
        </div>
    )
}

export default Genero