import React from 'react'
import './Pesquisa.css'

const Pesquisa = ({setCaracter, setNumPag}) => {
  return (
    <form onChange={e => {
        setNumPag(1);
        setCaracter(e.target.value);
    }} className='d-flex gap-4 my-5' action="">
        <input type="text" placeholder='Procurar personagem'/>
        <button onClick={e => {e.preventDefault()}} className='btn btn-primary fs-5'>Pesquisa</button>
    </form>
  )
}

export default Pesquisa