import { makeStyles } from "@material-ui/core/styles"
import { theme } from "../theme/theme";

const BookDescription = ({book}) => {
    const useStyles = makeStyles({
        description: {
            marginBottom: theme.spacing.small,
            "& h1": {
                margin: '0px',
                marginTop: theme.spacing.small,
                marginBottom: theme.spacing.very_small,
                fontSize: '1.7em',
            },

            "& p": {
                fontSize: theme.font.very_small,
                color: '#636363',
            },

            "& .author": {
                fontWeight: 700
            }
        },
        
    });

    const classes = useStyles();
    return (
        <div className={classes.description}>
            <h2>{book.volumeInfo.title}</h2>
            <div className="author"><span>{book.volumeInfo.authors}</span></div>
            <p>{book.volumeInfo.description}</p>
            
        </div>
    )
}

export default BookDescription;