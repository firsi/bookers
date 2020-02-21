import { db } from '../../util/base';
import { SAVE_BOOK_BEGIN, 
        SAVE_BOOK_SUCCES, 
        SAVE_BOOK_FAILURE, 
        FETCH_SAVED_BOOK_BEGIN,
        FETCH_SAVED_BOOK_SUCCES,
        FETCH_SAVED_BOOK_FAILURE,
        UPDATE_BOOK_STATUS_BEGIN,
        UPDATE_BOOK_STATUS_SUCCESS,
        UPDATE_BOOK_STATUS_FAILURE
    } from '../types';
import { defaultCover } from '../../util/constants';
import  Router from 'next/router';


//Save a book in my library
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

//Fetch Book saved in my library
export const fetchSavedBooks = () => dispatch => {
    dispatch(fetchSavedBooksBegin());

    let savedBooks = [];
    let booksCount = {
        read: 0,
        reading: 0,
        toRead: 0
    };

    db.collection('reading_list')
      .get()
      .then(snapshot => {
          snapshot.forEach(doc => {
                const data = {
                    id: doc.id,
                    bookInfo: doc.data()
                }

                if(data.bookInfo.status === 'Reading now'){
                    booksCount.reading = booksCount.reading + 1;
                }
                else if(data.bookInfo.status === 'Not started'){
                    booksCount.toRead = booksCount.toRead + 1;
                }
                else {
                    booksCount.read = booksCount.read + 1;
                }
               savedBooks.push(data);
          })
          dispatch(fetchSavedBooksSuccess(savedBooks, booksCount));
      })
      .catch(error => {
          console.log(error);
          dispatch(fetchSavedBooksFailure(error))
      })

}

export const fetchSavedBooksBegin = () => {
    return {
        type: FETCH_SAVED_BOOK_BEGIN
    }
}

export const fetchSavedBooksSuccess = (savedBooks, booksCount) => {
    return {
        type: FETCH_SAVED_BOOK_SUCCES,
        payload: {savedBooks},
        booksInfo: {booksCount}
    }
}

export const fetchSavedBooksFailure = (error) => {
    return {
        type: FETCH_SAVED_BOOK_FAILURE,
        payload: {error}
    }
}

//Update Book Status
export const updateBookStatus = (id, status) => dispatch => {
    dispatch(updateBookStatusBegin());

    db.collection('reading_list')
    .doc(id)
    .update({
        status
    })
    .then(() => {
        dispatch(updateBookStatusSuccess());
        fetchSavedBooks();
    })
    .catch(error => {
        console.log(error);
        dispatch(updateBookStatusFailure(error))
    })
}

const updateBookStatusBegin = () => {
    return {
        type: UPDATE_BOOK_STATUS_BEGIN
    }
}

const updateBookStatusSuccess = () => {
    return {
        type: UPDATE_BOOK_STATUS_SUCCESS
    }
}

const updateBookStatusFailure = (error) => {
    return {
        type: UPDATE_BOOK_STATUS_FAILURE,
        payload: {error}
    }
}