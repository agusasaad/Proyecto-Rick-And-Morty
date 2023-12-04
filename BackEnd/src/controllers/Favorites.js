let myFavorites = []

const postFav = (req, res) => {
    const character = req.body

    myFavorites.push(character)

    return res.json(myFavorites)
}
const deleteFav = (req, res) => {

    const { id } = req.params; 
    
    let indexToRemove = myFavorites.findIndex(elemento => elemento.id === Number(id));

    myFavorites.splice(indexToRemove, 1);

    return res.json(myFavorites)

}

module.exports = {
    postFav,
    deleteFav
}