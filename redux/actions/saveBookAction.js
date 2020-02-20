import { db } from '../../util/base';
import { SAVE_BOOK_BEGIN, SAVE_BOOK_SUCCES, SAVE_BOOK_FAILURE } from '../types';
import { defaultCover } from '../../util/constants';
import  Router from 'next/router';

export const saveBook = (book, readingStatus) => dispatch => {
    console.log("saveBook action",book)
    dispatch(saveBookBegin());
    const bookStatus = setBookStatus(readingStatus);
    return db.collection('reading_list')
             .doc(book.id)
            .set({
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors || 'Unknown',
                coverUrl: book.volumeInfo.imageLinks.smallThumbnail || defaultCover,
                status: bookStatus.status,
                addedAt: new Date(),
                startedAt: bookStatus.startedAt,
                finishedAd: '---'
            })
            .then(() => {
                dispatch(saveBookSUCCESS());
                Router.push('/mybooks');
            })
            .catch((error) => {
                dispatch(saveBookFailure(error));
                console.log(error);
            })
}

const setBookStatus = (readingStatus) => {
    let status ;
    let startedAt;
    if (readingStatus === 'now'){
        status = 'Reading now';
        startedAt = new Date();
    }
    else{
        status = 'Not started';
        startedAt = '---';
    }

    return {
        status,
        startedAt
    }
}

export const saveBookBegin = () => {
    return {
        type: SAVE_BOOK_BEGIN,
    }
}

export const saveBookSUCCESS = () => {
    return {
        type: SAVE_BOOK_SUCCES
    }
}

export const saveBookFailure = (error) => {
    return {
        type: SAVE_BOOK_FAILURE,
        payload: {error}
    }
}