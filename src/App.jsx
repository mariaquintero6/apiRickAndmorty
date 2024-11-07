import React, { useState, useEffect } from 'react';
import Cards from '../src/Componentes/cards'
import './App.css';


function App() {
  const [characters, setCharacters] = useState([]);

  const setlist = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const personajes = await response.json();
      setCharacters(personajes.results); // Suponemos que contiene la lista de personajes
      console.log('Los personajes son: ', personajes.results);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    setlist(); // Llama a `setlist` cuando el componente se monta
  }, []);

  return (
    <div className='container-fluid'>
      <div className="row">
        <h1 className='Title'> The Rick and Morty API</h1>

        <div className='List  d-flex  flex-wrap '>
          {characters.map((character) => (
            <div className='Personajes' key={character.id}>
              <Cards
                Foto={character.image}
                Nombre={character.name}
                Estado={character.status}
                Especie={character.species}
                Genero={character.gender}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
