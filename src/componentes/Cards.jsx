import React from 'react';
import '../componentes/Cards.css'

function Cards({ Nombre, Estado, Especie, Genero, Foto }) {
  return (
    <div className="card d-flex">
        <img src={Foto} alt={Nombre} className='img-fluid'/>
    <div className="content">
      <h2>{Nombre}</h2>
      <small>Estado:</small>
      <p>{Estado}</p>
      <small>Especie:</small>
      <p> {Especie}</p>
      <small>Genero:</small>
      <p>{Genero}</p>
      </div>
    </div>
  );
}

export default Cards