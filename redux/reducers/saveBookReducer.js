import { SAVE_BOOK_BEGIN, SAVE_BOOK_FAILURE, SAVE_BOOK_SUCCES } from "../types"

const initialState = {
    loading: false,
    error: null
}

export const saveBookReducer = (state = initialState, action) => {

    switch(action.type){
        case SAVE_BOOK_BEGIN :
            return {
                ...state,
                loading: true
            }
        case SAVE_BOOK_SUCCES :
            return {
                ...state,
                loading: false
            }
        case SAVE_BOOK_FAILURE :
        return {
            ...state,
            loading: false,
            error: action.payload.error,
        }
        default : 
            return state;
    }
}