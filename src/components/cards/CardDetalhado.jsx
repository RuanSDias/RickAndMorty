import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'

const CardDetalhado = () => {

    let{ id } = useParams();

    const [caracterInfo, setcaracterInfo] = useState([]);
    const { image, name, species, gender, status, location, origin, episode, type } = caracterInfo;

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
          const data = await fetch(api).then((res) => res.json());
          setcaracterInfo(data);
        })();
      }, [api, setcaracterInfo]);


  return (
    <div className='container d-flex justify-content-center'>
        <div className="d-flex flex-column gap-3">
            <h1 className='text-center'>{name}</h1>
            <img src={image} alt="" className='img-fluid'/>
            {(() => {
                if (status === 'Alive') {
                    return (
                        <div className="badge bg-success fs-5">{status}</div>
                    )
                } else if (status === 'Dead') {
                    return (
                        <div className="badge bg-danger fs-5">{status}</div>
                    )
                } else {
                    return (
                        <div className="badge bg-secondary fs-5">{status}</div>
                    )
                }
                })()}
                
                <div className="conteudo">
                    <span className="fw-bold">Espécie: </span>
                    {species}
                </div>

                <div className="conteudo">
                    <span className="fw-bold">Gênero: </span>
                    {gender}
                </div>

                <div className="conteudo">
                    <span className="fw-bold">Tipo: </span>
                    {type === '' ? 'Unknown' : type}
                </div>

                <div className="conteudo">
                    <span className="fw-bold">Origem: </span>
                    {origin?.name}
                </div>

                <div className="conteudo">
                    <span className="fw-bold">Local: </span>
                    {location?.name}
                </div>

                <div className="conteudo">
                    <span className="fw-bold">Tipo: </span>
                    {type === '' ? 'Unknown' : type}
                </div>

            </div>
        </div>
  )
}

export default CardDetalhado