import Router  from 'next/router';
import SearchSideCard from './SearchSideCard';

const BookList = ({books}) => {

    const handleClick = (id) => {
        Router.push(`/book/${id}`)
    }
    
    return (
        <div>
            {      
                books.map(book => 
                   <SearchSideCard 
                    key={book.id}
                    imageUrl={book?.volumeInfo?.imageLinks?.thumbnail}
                    imageAlt={book?.volumeInfo?.title}
                    title={book?.volumeInfo?.title}
                    category={book?.volumeInfo?.categories}
                    author={book?.volumeInfo?.authors}
                    handleClick = {() => handleClick(book.id)}
                   />
                )
            }
        </div>
    )
}



export default BookList;