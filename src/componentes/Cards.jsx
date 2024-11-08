import React from 'react';
import '../componentes/Cards.css'

function Cards({ Nombre, Estado, Especie, Genero, Foto }) {
  return (
    <div className="card d-flex">
        <img src={Foto} alt={Nombre} className='img-fluid'/>
    <div className="content">
      <h2>{Nombre}</h2>
      <p><strong className='fw-bold'>Estado:</strong> {Estado}</p>
      <p><strong className='fw-bold'>Especie:</strong> {Especie}</p>
      <p><strong className='fw-bold'>Genero:</strong> {Genero}</p>
      </div>
    </div>
  );
}

export default Cards