import React from 'react'

const InputGroup = ({ total, name, setId }) => {
    return (
        <div className="input-group mb-3">
            <select onChange={(e) => setId(e.target.value)} className="form-select" id={name}>
                {[...Array(total).keys()].map((e) => {
                    return <option value={e + 1}>{name} - {e + 1}</option>;
                })}
            </select>
        </div>
    )
}

export default InputGroup