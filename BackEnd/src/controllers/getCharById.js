const axios = require('axios');

const getCharById = (req, res) => {
    const { id } = req.params;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(
            response => {
                if (response.data && response.data.id) {
                    const { id, status, name, species, origin, image, gender } = response.data
                    res.json({ id, status, name, species, origin, image, gender })
                } else {
                    res.status(404).json({ messege: 'error' })
                }
            }
        )
        .catch(
            error => {
                res.status(500).json({ message: error.message })
            }
        )
}

module.exports = getCharById
