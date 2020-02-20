import { connect } from 'react-redux';
import SideImageCard from './SideImageCard';
import Router  from 'next/router';
import { CircularProgress } from '@material-ui/core';
import SearchSideCard from './SearchSideCard';

const BookList = ({books, loading}) => {

    const handleClick = (id) => {
        console.log(id)
        Router.push(`/book/${id}`)
    }
    console.log(books);
    return (
        <div>
            {     
                loading ? <CircularProgress /> :  
                (Object.entries(books).length === 0 ?
                    <h1>Sorry....This book has not been added yet</h1>
                
                : books.map(book => 
                   <SearchSideCard 
                    key={book.id}
                    imageUrl={book?.volumeInfo?.imageLinks?.thumbnail}
                    imageAlt={book?.volumeInfo?.title}
                    title={book?.volumeInfo?.title}
                    category={book?.volumeInfo?.categories}
                    author={book?.volumeInfo?.authors}
                    handleClick = {() => handleClick(book.id)}
                   />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.books.loading,
        books: state.books.books.items
    }
}

export default connect(mapStateToProps)(BookList);