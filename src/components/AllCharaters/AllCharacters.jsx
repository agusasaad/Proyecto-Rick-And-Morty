import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './allCharacters.css'
import Card from '../Cards/Card';

const AllCharacters = () => {
    const [page, setPage] = useState(1);
    const [allCharacters, setAllCharacters] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(({ data }) => {
                console.log(data)
                setAllCharacters(data.results);
                setTotalPages(data.info.pages);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [page]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <div className='container'>
                {allCharacters.map((character) => {
                    return (
                        <Card
                            id={character.id}
                            key={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            image={character.image}
                        />
                    )
                })}
            </div>
            <div className='Pagination'>
                <button className='buttonPagination' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous Page</button>
                <button className='buttonPagination' onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Next Page</button>
            </div>
        </>
    )
}

export default AllCharacters