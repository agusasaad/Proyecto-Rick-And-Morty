import './SearchBar.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleSearch = () => {
      props.onSearch(id)
      setId('')
   }


   return (
         <div className="search">
            <input placeholder="Search..." type="text" onChange={handleChange} value={id} />
            <button onClick={handleSearch} type="submit">Agregar</button>
         </div>
   );
}
