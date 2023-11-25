import { useDispatch, useSelector } from "react-redux"
import Card from "../Cards/Card"
import './Favorites.css'
import { filter_cards, order_cards } from "../Redux/action"

const Favorites = ({ onClose }) => {
  const myFavorites = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()

  const handleOrder = event => {
    dispatch(order_cards(event.target.value))
  }

  const handleFilter = event => {
    dispatch(filter_cards(event.target.value))
  }

  return (<div>
    <div className="select-container">
        <select name="order" onChange={handleOrder}>
          <option className='option' value="A">Ascendente</option>
          <option className='option' value="D">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter}>
        <option className='option' value="All">All</option>
          <option className='option' value="Male">Male</option>
          <option className='option' value="Female">Female</option>
          <option className='option' value="Genderless">Genderless</option>
          <option className='option' value="unknown">unknown</option>
          
        </select>
    </div>
    <div className='Cards-container'>
      {myFavorites.map((myFavorite) => {
        return (
          <Card
            onClose={onClose}
            id={myFavorite.id}
            key={myFavorite.id}
            name={myFavorite.name}
            status={myFavorite.status}
            species={myFavorite.species}
            origin={myFavorite.origin}
            gender={myFavorite.gender}
            image={myFavorite.image}
          />
        )
      })}
    </div>
  </div>


  )
}
export default Favorites