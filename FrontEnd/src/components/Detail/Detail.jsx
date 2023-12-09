import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Detail.css'

const Detail = () => {

  const params = useParams();

  const [character, setCharacter] = useState({})

  useEffect(() => {
    const effect = async () => {
      try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${params.id}`)

        if (data.name) {
          setCharacter(data);
        }
      } catch (error) {
        window.alert('No hay personajes con ese ID');
      }
    }
    effect()
    return setCharacter({});
  }, [params.id]);



  return (
    <div className="conteiner-detail">
      <div className="card-detail" key={character.id}>
        <img className='img-detail' src={character.image} alt='imagen de rick' />
        <h2 className='h2-detail'>{character.name}</h2>
        <div className="caracteristicas">
          <p className='p-detail'>Status: {character.status}</p>
          <p className='p-detail'>Species: {character.species}</p>
          <p className='p-detail'>Gender: {character.gender}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail