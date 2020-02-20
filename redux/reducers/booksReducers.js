import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_BEGIN, FETCH_BOOKS_SUCCES } from "../types";

const initialState = {
    loading: false,
    books: [],
    error: null
}

export const booksReducer = (state = initialState, action)  => {
    switch (action.type) {
        case FETCH_BOOKS_BEGIN :
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_BOOKS_SUCCES :
            return {
                ...state,
                loading: false,
                books: action.payload.books
            }

        case FETCH_BOOKS_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload.errors
            }
        
        default:
            return state;
    }
}