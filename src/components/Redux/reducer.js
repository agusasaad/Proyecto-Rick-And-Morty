import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./action_type";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(character => character.id !== payload),
                myFavorites: state.myFavorites.filter(character => character.id !== payload)

            }
        case FILTER_CARDS:
            if (payload === 'All')
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.gender === payload)
            }
        case ORDER_CARDS:
            const orderCopy = [...state.myFavorites];
            if (payload === 'A') {
                orderCopy.sort((a, b) => a.id - b.id)
            }
            if (payload === 'D') {
                orderCopy.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: orderCopy
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer