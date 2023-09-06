import React from 'react'
import BotoesFiltro from '../BotoesFiltro'

const Especie = ({ setNumPag, setEspecie }) => {

    let especie = ['Human',
                     'Alien',
                     'Humanoid',
                     'Poopybutthole',
                     'Mythological',
                     'Unknown',
                     'Animal',
                     'Disease',
                     'Robot',
                     'Cronenberg',
                    ];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseTwo" 
                aria-expanded="false" 
                aria-controls="collapseTwo"
                >
                    Espécie
                </button>
            </h2>
            <div id="collapseTwo" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {especie.map((items, index) => (
                        <BotoesFiltro 
                            key={index} 
                            name='especie' 
                            items={items} 
                            index={index}
                            task = {setEspecie}
                            setNumPag = {setNumPag}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Especie