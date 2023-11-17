import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {

  const params = useParams();

  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${params.id}?`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
    return setCharacter({});
  }, [params.id]);

  return (
    <div>
      <h1>Details</h1>
      <div>
      <h2>Name | {character.name}</h2>
      <h3>Status | {character.status}</h3>
      <h3>Species | {character.species}</h3>
      <h3>Gender | {character.gender}</h3>
      <img src={character.image} alt='imagen de rick'/>
      </div>
    </div>
  )
}

export default Detail