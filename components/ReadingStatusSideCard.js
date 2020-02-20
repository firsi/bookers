import { makeStyles } from "@material-ui/core";
import SideImageCard from "./SideImageCard";
import { theme } from "../theme/theme";
import BookStatus from "./BookStatus";

const useStyles = makeStyles({
    root: {
        padding: 0,
    },
    title: {
        fontSize: '1.3em',
        width: '95%',
        color: theme.color.primary_dark,
        fontWeight: 900,
        marginTop: '0.4em',
        marginBottom: '0.4em',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    author: {
      display: 'inline-block',
      fontSize: '0.75em',
      marginBottom: theme.spacing.small,
      color: 'grey',
      width: '95%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    
})

const ReadingStatusSideCard = ({imageUrl, imageAlt, title, author, status, color, handleClick}) => {
    const classes = useStyles();
    return(
        <SideImageCard 
            classeName={classes.root}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            height = {120}
            coverHeight = {120}
            maxCoverHeight= {120}
            rootPadding={'0em'}
            coverRadius={'0px'}
        >
            <h3 className={classes.title}>{title}</h3>
            <small className={classes.author} >{author}</small>
            <BookStatus text={status} color={color} />
        </SideImageCard>
    )
}

export default ReadingStatusSideCard;