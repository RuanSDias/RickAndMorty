import React from 'react'
import './Filtro.css'
import Genero from './categorias/Genero'
import Especie from './categorias/Especie'
import Status from './categorias/Status'

const Filtro = () => {
  return (
    <div className="col-3">
      <div className='text-center fw-bold fs-4 mb-1'>Filtro</div>
      <div className="limparFiltro text-center text-primary text-decoration-underline mb-4">Limpar filtro</div>
      <div className="accordion" id="accordionExample">
        <Genero/>
        <Status/>
        <Especie/>
      </div>
    </div>
  )
}

export default Filtro