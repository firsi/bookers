import Router from 'next/router';
import { API } from '../../util/API';

import { FETCH_BOOKS_BEGIN, FETCH_BOOKS_SUCCES, FETCH_BOOKS_FAILURE } from '../types';

export const fetchBooks = (searchterm) => async (dispatch) => {
    dispatch(fetchBooksBegin());

    const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${API}`)
    const data = result.json();

    return data.then(books => {
            dispatch(fetchBooksSuccess(books));
            Router.push('/search');
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchBooksFailure(error));
            })
    
}

export const fetchBooksBegin = () => {
    console.log('fetchBooksBegin');
    return {
        type: FETCH_BOOKS_BEGIN
    }
}

export const fetchBooksSuccess =  books => {
    return {
        type: FETCH_BOOKS_SUCCES,
        payload: {books}
    }
}

export const  fetchBooksError = errors => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: {errors}
    }
}

