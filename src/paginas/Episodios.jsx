import React, { useEffect, useState } from 'react'
import Card from '../components/cards/Card'
import InputGroup from '../components/filtros/episodios/InputGroup'

const Episodios = () => {

  const [id, setId] = useState(1)
  const [info, setInfo] = useState([])
  const [results, setResults] = useState([])
  const { air_date, name } = info;


  const api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function(){

      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const characterList = await Promise.all(
        data.characters.map((e) => {
          return fetch(e).then((resp) => resp.json());
        })
      );
      setResults(characterList);
    })()
  }, [api])
  return (
    <div className='container'>
      <div className='row'>
        <h1 className="text-center mb-4">
          Episódio: {name === '' ? "Episódio desconhecido" : name}
        </h1>
        <h5 className="text-center">
          Data de exibição = {air_date === '' ? 'Data desconhecida' : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>Escolha o episódio</h4>
          <InputGroup setId={setId} name='Episodes' total={51}/>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page='/episodios/' results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodios