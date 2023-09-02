import React from 'react'
import { Link } from 'react-router-dom'
import estilo from './Card.scss'

const Card = ({ results, page }) => {

  let display;

  if (results) {
    display = results.map(e => {
      return (
        <Link 
        to={`${page}${e.id}`} key={e.id} 
        style={{textDecoration: 'none'}} 
        className="col-lg-4 col-md-6 col-12 text-dark "
        >
          <div className="card mb-4">
            <img
              src={e.image}
              className="img img-fluid"
              alt="Foto do personagem"
            />
            <div className="informacoes">
              <div className="fs-5 fw-bold mb-4">{e.name}</div>
              <div className="">
                <div className="fs-7">Last Location:</div>
                <div className="fs-6">{e.location.name}</div>
              </div>
            </div>
            {(() => {
              if (e.status === 'Alive') {
                return (
                  <div className={`${estilo.badge} position-absolute badge bg-success`}>{e.status}</div>
                )
              } else if (e.status === 'Dead') {
                return (
                  <div className={`${estilo.badge} position-absolute badge bg-danger`}>{e.status}</div>
                )
              } else {
                return (
                  <div className={`${estilo.badge} position-absolute badge bg-secondary`}>{e.status}</div>
                )
              }
            })()}
          </div>
        </Link>
      )
    });
  } else {
    display = 'Personagem não encontrado'
  }

  return (
    <>{display}</>
  )
}

export default Card