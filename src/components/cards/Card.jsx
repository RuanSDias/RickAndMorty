import React from 'react'
import './Card.css'

const Card = ({ results }) => {

  let display;

  if (results) {
    display = results.map(e => {
      return (
        <div key={e.id} className="col-4">
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
                  <div className="badge bg-success">{e.status}</div>
                )
              } else if (e.status === 'Dead') {
                return (
                  <div className="badge bg-danger">{e.status}</div>
                )
              } else {
                return (
                  <div className="badge bg-secondary">{e.status}</div>
                )
              }
            })()}
          </div>
        </div>
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