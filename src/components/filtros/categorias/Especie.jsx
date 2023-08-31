import React from 'react'
import BotoesFiltro from '../BotoesFiltro'

const Especie = () => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Espécie
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <BotoesFiltro/>
                </div>
            </div>
        </div>
    )
}

export default Especie