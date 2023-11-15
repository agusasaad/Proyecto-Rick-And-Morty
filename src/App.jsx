import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/Navbar/NavBar.jsx';


function App() {

  const [characters, setCharacters] = useState([])

  //Lamada a la Api Rick AND Morty
  const onSearch = (id) => {
    const characterId = characters.filter(
      character => character.id === Number(id)
    )
    if(characterId.length){
      return alert(`El personaje con id: ${id} ya existe`)
    }
    axios(`https://rickandmortyapi.com/api/character/${id}?`)
      .then(
        ({ data }) => {
          if (data.name) {
            setCharacters((characters) => [...characters, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        }
      );
  }

  //Agrega un personaje ramdom
  const characterRamdom = () => {
    let idRamdom = Math.ceil(Math.random()*826)
    axios(`https://rickandmortyapi.com/api/character/${idRamdom}?`)
    .then(
      ({ data }) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        }
      }
    );
  }

  //Borra la Card por ID
  const onClose = (id) => {
    setCharacters(
      characters?.filter((character) => {
        return character.id !== parseInt(id)
      })
    )
  }

  return (
    <div className='App'>
      <NavBar characterRamdom={characterRamdom} onSearch={onSearch}/>
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;