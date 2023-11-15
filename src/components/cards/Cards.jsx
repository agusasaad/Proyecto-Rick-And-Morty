import Card from './Card';
import './Cards.css'

export default function Cards(props) {
   return <div className='Cards-container'>
      {props.characters.map((character) => {
         return (
            <Card
               onClose={props.onClose}
               id={character.id}
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
            />
         )
      })}
   </div>
}
