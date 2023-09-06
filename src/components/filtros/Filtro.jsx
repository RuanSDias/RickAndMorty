import React from 'react'
import './Filtro.css'
import Genero from './categorias/Genero'
import Especie from './categorias/Especie'
import Status from './categorias/Status'

const Filtro = ({ setNumPag, setGenero, setStatus, setEspecie }) => {
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className='filt text-center fw-bold fs-4 mb-1'>Filtro</div>
      <div 
        className="limparFiltro text-center text-primary text-decoration-underline mb-4"
        onClick={_ => {
          setNumPag('');
          setGenero('');
          setStatus('');
          setEspecie('');
          window.location.reload(false);
        }}
      >Limpar filtro</div>
      <div className="accordion" id="accordionExample">
        <Genero setGenero={setGenero} setNumPag={setNumPag}/>
        <Status setStatus={setStatus} setNumPag={setNumPag}/>
        <Especie setEspecie={setEspecie} setNumPag={setNumPag}/>
      </div>
    </div>
  )
}

export default Filtro