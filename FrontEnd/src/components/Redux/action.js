import { useDispatch } from "react-redux";
import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./action_type"
import axios from "axios"



export const add_fav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
};

export const remove_fav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
    };
};

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