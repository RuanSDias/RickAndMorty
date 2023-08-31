import React from 'react'

const BotoesFiltro = ({ name, index, items, task, setNumPag}) => {
    return (
        <div>
            <style jsx>
                {`
                    .botoes:checked + label {
                        background-color: #0b5ed7;
                        color: white;
                    }

                    input[type='radio'] {
                        display: none;
                    }
                `}
            </style>
            <div className="form-check">
                <input 
                    className="form-check-input botoes" 
                    type="radio" 
                    name={name} 
                    id={`${name}-${index}`} 
                    onClick={() => {
                        setNumPag(1);
                        task(items);
                    }}
                />
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div>
    )
}

export default BotoesFiltro