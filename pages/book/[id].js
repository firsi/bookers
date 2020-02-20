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


const Book = ({book, isBookAdded}) => {
    const useStyles = makeStyles({
        bookCover: {
            width: '80%',
            height: '400px',
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

    const imageLink = book?.volumeInfo?.imageLinks?.thumbnail || defaultCover;
    const classes = useStyles();
    
    return (
       <Layout>
            <div>
                {/* <h1>Book Details</h1> */}
                <div className={classes.bookCover}>
                    <img 
                        src={imageLink} 
                        alt={book?.title}
                    />
                </div>
                <div className="book-info">
                    <BookDescription book={book}/>
                    <BookDetails book={book}/>   
                    <BookModal isBookAdded={isBookAdded} book={book} />
                </div>
            </div>
       </Layout>
    )
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
                        isBookAdded
                    }
                })
                .catch(error => console.log(error))
                
                
            })
            .catch(error => console.log(error)); 
}

export default Book;

