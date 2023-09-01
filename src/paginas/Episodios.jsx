import React, { useEffect, useState } from 'react'
import Cards from '../components/cards/Card'

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
          Episódio: {name === '' ? "Episódio" : name}
        </h1>
        <h5 className="text-center">
          Data de exibição = {air_date === '' ? 'Data desconhecida' : air_date}
        </h5>
      </div>
      <div className='row'>
        <div className='col-3'>Pick episode</div>
        <div className="col-8">
          <div className="row">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodios