import ReadingStatusSideCard from "./ReadingStatusSideCard"
import { setStatusColor } from "../util/helpers";
import { Grid } from "@material-ui/core";

const ReadingNowList = ({readingNowBooks}) => {

    return (
        <Grid container>
            {readingNowBooks.map((book, index) => 
                <Grid item xs={12} sm={6}>
                    <ReadingStatusSideCard
                        key={book.addedAt.toString()+'-'+index}
                        imageUrl= {book.coverUrl}
                        imageAlt= {book.title}
                        title = {book.title}
                        author= {book.authors?.join(", ")}
                        status = {book.status}
                        color = {setStatusColor(book.status)}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default ReadingNowList;