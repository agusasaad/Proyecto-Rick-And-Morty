import './Card.css'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add_fav, remove_fav } from '../Redux/action'
import { useState, useEffect } from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";


export default function Card(props) {

   const deleteCard = () => {
      props.onClose(props.id)
   }

   const dispatch = useDispatch();

   const myFavorites = useSelector(state => state.myFavorites)


   const [isfav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isfav === true) {
         setIsFav(false)
         dispatch(remove_fav(props.id))
      }
      if (isfav === false) {
         setIsFav(true)
         dispatch(add_fav(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((isfav) => {
         if (isfav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const location = useLocation()

   return (
      <div className="card" key={props.id}>
         {
            isfav ? (
               <button className="button_fav" onClick={handleFavorite}><MdOutlineFavorite style={{color: 'white'}}/></button>
            ) : (
               <button className="button_fav" onClick={handleFavorite}><MdOutlineFavoriteBorder style={{color: 'white'}}/></button>
            )
         }
         {location.pathname !== '/allCharacter' && <button className="button" onClick={deleteCard}>
            <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
         </button>}
         <img className='imgCard' src={props.image} alt={props.name} />
         <div className="details">
            <label>{props.name}</label>
            <p>
               Estatus:{props.status}
               <br />
               Specie: {props.species}
               <br />
               Gender: {props.gender}
               <br />
               Origin: {props.origin}
               <br/>
               <Link to={`/detail/${props.id}`} >More</Link>
            </p>
         </div>
      </div>
   )
}