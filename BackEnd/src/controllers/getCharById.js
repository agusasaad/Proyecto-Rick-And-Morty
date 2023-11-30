const axios = require('axios')
const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id: data.id,
            nombre: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
            location: data.location
        }
        return res
            .writeHead(200, {"Content-Type" : "text/plain"})
            .end(JSON.stringify(character))
    })
    .catch(error => 
        res 
        .writeHead(500, {"Content-Type" : "application/json"})
        .end(error.messege)
    )
}


module.exports = getCharById