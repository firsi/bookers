import { SAVE_BOOK_BEGIN, 
        SAVE_BOOK_FAILURE, 
        SAVE_BOOK_SUCCES, 
        FETCH_SAVED_BOOK_BEGIN, 
        FETCH_SAVED_BOOK_SUCCES, 
        FETCH_SAVED_BOOK_FAILURE, 
        UPDATE_BOOK_STATUS_BEGIN,
        UPDATE_BOOK_STATUS_SUCCESS, 
        UPDATE_BOOK_STATUS_FAILURE 
        } from "../types"

const initialState = {
    loading: false,
    error: null,
    savedBooks: [],
    booksCount: {},
    message: ''
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
        case FETCH_SAVED_BOOK_BEGIN : 
            return {
                ...state,
                loading: true,
            }
        case FETCH_SAVED_BOOK_SUCCES : 
            return {
                ...state,
                loading: false,
                savedBooks: action.payload.savedBooks,
                booksCount: action.booksInfo.booksCount,
            }
        case FETCH_SAVED_BOOK_FAILURE : 
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case UPDATE_BOOK_STATUS_BEGIN :
            return {
                ...state,
                loading: true
            }
        case UPDATE_BOOK_STATUS_SUCCESS :
            return {
                ...state,
                loading: false,
                message: 'Book status updated successfuly'
            }
        case UPDATE_BOOK_STATUS_FAILURE :
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error
                }
        
        default : 
            return state;
    }
}