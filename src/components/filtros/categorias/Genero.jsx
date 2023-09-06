import React from 'react'
import BotoesFiltro from '../BotoesFiltro'

const Genero = ({ setGenero, setNumPag }) => {
    
    const genero = ['male', 'female', 'genderless', 'unknown']

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#collapseOne" 
                aria-expanded="true" 
                aria-controls="collapseOne"
                >
                    Gênero
                </button>
            </h2>
            <div id="collapseOne" 
            className="accordion-collapse collapse show" 
            data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {genero.map((items, index) => (
                        <BotoesFiltro 
                            key={index} 
                            name={genero} 
                            index={index} 
                            items={items}
                            task={setGenero}
                            setNumPag={setNumPag}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Genero