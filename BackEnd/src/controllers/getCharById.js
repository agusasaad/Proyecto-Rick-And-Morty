const axios = require('axios');

const getCharById = async (req, res) => {
    const { id } = req.params;
    try {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        let data = response.data
        if (data.name) {
            const { id, status, name, species, origin, image, gender } = response.data
            res.json({ id, status, name, species, origin, image, gender })
        } else {
            res.status(404).json({ messege: 'error' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = getCharById
