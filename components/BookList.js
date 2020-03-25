import Router  from 'next/router';
import SearchSideCard from './SearchSideCard';
import { Grid } from '@material-ui/core';

const BookList = ({books}) => {

    const handleClick = (id) => {
        Router.push(`/book/${id}`)
    }
    
    return (
        <Grid container>

            {      
                books.length === 0 ? 
                    <h2>Sorry! The ressource you requested doesn't exists</h2>
                : books.map(book => 
                   <Grid item xs={12} md={6}>
                    <SearchSideCard 
                        key={book.id}
                        imageUrl={book?.volumeInfo?.imageLinks?.thumbnail}
                        imageAlt={book?.volumeInfo?.title}
                        title={book?.volumeInfo?.title}
                        category={book?.volumeInfo?.categories}
                        author={book?.volumeInfo?.authors}
                        handleClick = {() => handleClick(book.id)}
                    />
                   </Grid>
                )
            }
        </Grid>
    )
}



export default BookList;