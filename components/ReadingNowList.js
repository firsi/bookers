import ReadingStatusSideCard from "./ReadingStatusSideCard"
import { setStatusColor } from "../util/helpers";

const ReadingNowList = ({readingNowBooks}) => {

    return (
        <>
            {readingNowBooks.map((book, index) => 
                <ReadingStatusSideCard
                    key={book.addedAt.toString()+'-'+index}
                    imageUrl= {book.coverUrl}
                    imageAlt= {book.title}
                    title = {book.title}
                    author= {book.authors?.join(", ")}
                    status = {book.status}
                    color = {setStatusColor(book.status)}
                 />
            )}
        </>
    )
}

export default ReadingNowList;