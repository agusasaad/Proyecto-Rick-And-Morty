import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./action_type"

export const add_fav = (props) => {
    return {
        type: ADD_FAV,
        payload: props
    }
}

export const remove_fav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filter_cards = (gender) => {
    return {
        type: FILTER_CARDS,
        payload: gender
    }
}

export const order_cards = (A, D) => {
    return {
        type: ORDER_CARDS,
        payload: A, D
    }
}