import React from 'react'

const BotoesFiltro = ({name, index}) => {
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name={name} id={`${name}-${index}`} />
                <label class="btn btn-outline-primary" for="flexRadioDefault1">Single toggle
                    Default radio
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="btn btn-outline-primary" for="flexRadioDefault2">Single toggle
                    Default radio 2
                </label>
            </div>
        </div>

    )
}

export default BotoesFiltro