import React from 'react'
import './Pesquisa.css'

const Pesquisa = ({setCaracter, setNumPag}) => {
  return (
    <form onChange={e => {
        setNumPag(1);
        setCaracter(e.target.value);
    }} className='d-flex my-5' action="">
        <input type="text" placeholder='Procurar personagem'/>
    </form>
  )
}

export default Pesquisa