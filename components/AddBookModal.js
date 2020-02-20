import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { saveBook } from "../redux/actions/saveBookAction";
import BaseModal from "./Modal";
import { Button } from "@material-ui/core";
import { theme } from "../theme/theme";


const BookModal = ({book, isBookAdded, saveBook}) => {
    const useStyles = makeStyles ({
        root: {
            fontSize: theme.font.very_small,
        },
        actionArea: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        containedPrimary: {
            backgroundColor: theme.color.primary,
                     
        }, 
        outlinedPrimary:  {
            borderColor: theme.color.primary,
            color: theme.color.primary,
        }
    });

    const handleClick = (readingStatus) => {
        saveBook(book,readingStatus);
    }

    const classes = useStyles();

    return (
        <BaseModal isButtonDisabled={isBookAdded} buttonText='+  Add to List ' className={classes.root}>
            <p>Reading this book now, 
            or do you want to add it to the books to read later ?</p>
            <div className={classes.actionArea}>
                <Button 
                    className={classes.containedPrimary} 
                    variant="contained"
                    color="primary"
                    onClick={() => handleClick('now')}
                    >
                    Reading now
                </Button>
                <Button 
                    className={classes.outlinedPrimary} 
                    variant="outlined"
                    color="primary"
                    onClick={() => handleClick('later')}
                    >
                    Read Later
                </Button>
            </div>
        </BaseModal>
    )
}

const mapActionToProps = {
    saveBook
}


export default connect(null, mapActionToProps)(BookModal);