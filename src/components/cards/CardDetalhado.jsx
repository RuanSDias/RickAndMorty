import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import './CardDetalhado.css'

const CardDetalhado = () => {

    let{ id } = useParams();

    const [caracterInfo, setcaracterInfo] = useState([]);
    const { image, name, species, gender, status, location, origin, type, episode } = caracterInfo;
    
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
            <h1 className='nome text-center'>{name}</h1>
                <div className='card'>
                    <img src={image} alt="" className='img img-fluid'/>
                </div>
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
                <div className='conteudo mb-1'>
                    <div className="">
                        <span className="fw-bold">Espécie: </span>
                        <span className='sub'>{species}</span>   
                    </div>

                    <div className="">
                        <span className="fw-bold">Gênero: </span>
                        <span className='sub'>{gender}</span>  
                        
                    </div>

                    <div className="">
                        <span className="fw-bold">Tipo: </span>
                        
                        <span className='sub'>{type === '' ? 'Unknown' : type}</span>  
                    </div>

                    <div className="">
                        <span className="fw-bold">Origem: </span>
                        <span className='sub'>{origin?.name}</span>  
                        
                    </div>

                    <div className="">
                        <span className="fw-bold">Local: </span>
                        <span className='sub'>{location?.name}</span>  
                        
                    </div>

                    <div className="">
                        <span className="fw-bold">Tipo: </span>
                        <span className='sub'>{type === '' ? 'Unknown' : type}</span>  
                    </div>

                    <div className="">
                        <span className="fw-bold">Episodios: </span>
                        <span className='sub'>{}</span>  
                    </div>

                </div>
            </div>
        </div>
  )
}

export default CardDetalhado