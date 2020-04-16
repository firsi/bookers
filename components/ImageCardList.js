import ImageCard from "./ImageCard"
import Router from "next/router"

const ImageCardList = ({books}) => {
    const handleClick = (id) => {
        Router.push(`/book/${id}`)
    }

    return (
        <>
            {books && 
                books.map(book => 
                    <ImageCard 
                        key={book.id}
                        imageUrl={book?.volumeInfo?.imageLinks?.thumbnail}
                        imageAlt={book?.volumeInfo?.title}
                        title={book?.volumeInfo?.title}
                        authors={book?.volumeInfo?.authors?.join(', ')}
                        handleClick = {() => handleClick(book.id)}
                    />
                )
            }
        </>
    )
}

export default ImageCardList;