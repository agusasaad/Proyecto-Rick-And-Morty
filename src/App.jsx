import {useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Form from './components/Form/Form.jsx';
import Error404 from './components/Error404/Error404.jsx';




function App() {

  const [characters, setCharacters] = useState([])

  //Lamada a la Api Rick AND Morty
  const onSearch = (id) => {
    const characterId = characters.filter(
      character => character.id === Number(id)
    )
    if (characterId.length) {
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
    let idRamdom = Math.ceil(Math.random() * 826)
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
      <NavBar characterRamdom={characterRamdom} onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;