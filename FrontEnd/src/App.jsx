import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { remove_fav } from './components/Redux/action.js';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Form from './components/Form/Form.jsx';
import Error404 from './components/Error404/Error404.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import ButtonRamdom from './components/ButtonRamdomAndCharacter/ButtonRamdomAndCharacter.jsx';
import AllCharacters from './components/AllCharaters/AllCharacters.jsx';




function App() {
  //Localiza donde esta parado el cliente 
  const location = useLocation()

  //Setea los personajes
  const [characters, setCharacters] = useState([])
  
  //Login
  const [access, setAccess] = useState(false)
  const EMAIL = 'agusasaad1099@hotmail.com';
  const PASSWORD = '123123'
  const Navigate = useNavigate()
  
  //Lamada a la Api Rick AND Morty
  const onSearch = (id) => {
    const characterId = characters.filter(
      character => character.id === parseInt(id)
    )
    if (characterId.length) {
      return alert(`El personaje con id: ${id} ya existe`)
    }
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    // .then((response) => console.log(response.data.nombre))
      .then((res) => {
          if (res.data.nombre) {
            setCharacters((characters) => [...characters, res.data]);
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

  //Borra la Card por ID 'x'
  const dispatch = useDispatch()
  const onClose = (id) => {
    setCharacters(
      characters?.filter((character) => {return character.id !== parseInt(id)}))
      dispatch(remove_fav(id))
    }



  //funcion login 
  function login(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      Navigate('/home');
    }
  }

  useEffect(() => {
    !access && Navigate('/');
  }, [access]);



  return (
    <div className='App'>

      {location.pathname !== '/' && <NavBar characterRamdom={characterRamdom} onSearch={onSearch} />}
      {location.pathname === '/home' && <ButtonRamdom characterRamdom={characterRamdom}/>}
      
      <Routes>
        <Route path='/allCharacter' element={<AllCharacters />} />
        <Route path='/favorites' element={<Favorites onClose={onClose} />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;