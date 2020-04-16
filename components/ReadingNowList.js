import ReadingStatusSideCard from "./ReadingStatusSideCard"
import { setStatusColor } from "../util/helpers";
import { Grid } from "@material-ui/core";

const ReadingNowList = ({readingNowBooks}) => {
    
    return (
        <Grid container>
            {readingNowBooks.map((book, index) => 
                <Grid item xs={12} sm={6} key={book.bookInfo.addedAt.toString()+'-'+index}>
                    <ReadingStatusSideCard
                        imageUrl= {book.bookInfo.coverUrl}
                        imageAlt= {book.bookInfo.title}
                        title = {book.bookInfo.title}
                        author= {book.bookInfo.authors?.join(", ")}
                        status = {book.bookInfo.status}
                        color = {setStatusColor(book.bookInfo.status)}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default ReadingNowList;