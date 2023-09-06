import React, { useEffect, useState } from 'react'
import Card from '../components/cards/Card'
import InputGroup from '../components/filtros/episodios/InputGroup'
import './Paginas.css'

const Locais = () => {

  const [id, setId] = useState(1)
  const [info, setInfo] = useState([])
  const [results, setResults] = useState([])
  const { name, type, dimension } = info;


  const api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function(){

      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const characterList = await Promise.all(
        data.residents.map((e) => {
          return fetch(e).then((resp) => resp.json());
        })
      );
      setResults(characterList);
    })()
  }, [api])
  return (
    <div className='container'>
      <div className='row'>

        <h1 className="info text-center mb-4">
          Local: {name === '' ? "Local desconhecido" : name}
        </h1>

        <h5 className="info text-center">
          Dimensão = {dimension === '' ? 'Unknown' : dimension}
        </h5>

        <h6 className="info text-center mb-3">
          Tipo = {type === '' ? 'Unknown' : type}
        </h6>

      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='info text-center mb-4'>Escolha o local</h4>
          <InputGroup setId={setId} name='Location' total={126}/>
        </div>
        <div className="col-lg-8 col-12 ">
          <div className="row">
            <Card page='/locais/' results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locais