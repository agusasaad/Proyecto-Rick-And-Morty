import { useDispatch, useSelector } from "react-redux"
import Card from "../Cards/Card"
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
    <div>
        <select name="order" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
          
        </select>
    </div>
    <div className='Cards-container'>
      {myFavorites.map((myFavorites) => {
        return (
          <Card
            onClose={onClose}
            id={myFavorites.id}
            key={myFavorites.id}
            name={myFavorites.name}
            status={myFavorites.status}
            species={myFavorites.species}
            gender={myFavorites.gender}
            image={myFavorites.image}
          />
        )
      })}
    </div>
  </div>


  )
}
export default Favorites