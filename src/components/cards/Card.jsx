import React from "react";
import './Card.css'

const Cards = ({ results }) => {
  return (
    <div className="col-4 position-relative">
      <div className="card mb-4">
        <img
          src={results.image}
          className="img"
          alt="Foto do personagem"
        />
        <div className="conteudo img-fluid">
          <div className="fs-5 fw-bold mb-4">{results.name}</div>
          <div className="">
            <div className="fs-7">Last Location:</div>
            <div className="fs-6">{results.location.name}</div>
          </div>
        </div>
      </div>
      {(() => {
        if (results.status === 'Alive') {
          return (
            <div className="badge bg-success position-absolute">{results.status}</div>
          )
        } else if (results.status === 'Dead') {
          return (
          <div className="badge bg-danger position-absolute">{results.status}</div>
          )
        } else {
          return (
            <div className="badge bg-secondary position-absolute">{results.status}</div>
          )
        }
      })()}
    </div>
  );
}

export default Cards