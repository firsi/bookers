import fetch from 'isomorphic-fetch'
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../../components/Layout"
import BookDescription from "../../components/BookDescription"
import BookDetails from "../../components/BookDetails"
import { API } from '../../util/API'
import { theme } from "../../theme/theme"
import  BookModal  from '../../components/AddBookModal'
import { defaultCover } from '../../util/constants'
import { db } from '../../util/base'
import { Grid } from '@material-ui/core'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../../redux/actions/booksActions'
import BookList from '../../components/BookList'


const useStyles = makeStyles({
    imageContainer: {
        width: '100%'
    },
    bookCover: {
        width: '80%',
        maxHeight: '500px',
        maxWidth: '450px',
        overflow: 'hidden',
        margin: 'auto',   

        "& img": {
            maxWidth: '100%',
            maxHeight: '100%',
            width: '100%',
        }
    },
    bookActionArea: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    containedPrimary: {
        display: 'block',
        backgroundColor: theme.color.primary,
        margin: 'auto',
        minWidth: '280px',
    }, 
});

const Book = ({book, booksFromAuthor, isBookAdded, authors, fetchBooks}) => {
    const imageLink = book?.volumeInfo?.imageLinks?.thumbnail || defaultCover;
    
    useEffect(() => {
        const singleAuthor = Array.isArray(authors) ? authors[0] : authors;
        fetchBooks(singleAuthor)
    },[])

    const classes = useStyles();
    return (
       <Layout>
            <Grid container justify='center'>
                {/* <h1>Book Details</h1> */}
                <Grid item xm={12} md={4} className={classes.imageContainer}>
                    <div className={classes.bookCover}>
                        <img 
                            src={imageLink} 
                            alt={book?.title}
                        />
                    </div>
                </Grid>
                <Grid item xm={12} md={5}>
                    <div className="book-info">
                        <BookDescription book={book}/>
                        <BookDetails book={book}/>   
                        <BookModal isBookAdded={isBookAdded} book={book} />
                    </div>
                </Grid>
            </Grid>
            <h3>Other Books from this author</h3>
            {booksFromAuthor && <BookList books={booksFromAuthor?.slice(0,4)} />}
       </Layout>
    )
}

const mapPropsToState = (state) => ({
    booksFromAuthor : state.books.books.items
})

const mapActionToProps = {
    fetchBooks
}

Book.getInitialProps = async ({query}) => {
    const result = await fetch(`https://www.googleapis.com/books/v1/volumes/${query.id}?key=${API}`);
    const data = result.json();
    let isBookAdded = false;
    return data
            .then(book => {
                return db.collection('reading_list')
                .doc(book.id)
                .get()
                .then(doc => {
                    if(doc.exists){
                        isBookAdded = true;
                    }
                    return {
                        book, 
                        isBookAdded,
                        authors: query.authors
                    }
                })
                .catch(error => console.log(error))
                
                
            })
            .catch(error => console.log(error)); 
}

export default connect(mapPropsToState, mapActionToProps)(Book);

