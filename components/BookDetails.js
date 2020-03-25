import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";
import { theme } from '../theme/theme'
import InfoCard from './InfoCard';
import { isoLangs } from '../util/languages';

const BookDetails = ({book}) => {

    const useStyles = makeStyles({
        root: {
            padding: '1em',
            marginBottom: theme.spacing.medium
        },
        content: {
            display: 'flex',
            justifyContent: 'space-between',
        },  
        title: {
            color: theme.color.primary_very_light,
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: '1em',
            maxWidth: '50%',
            wordWrap: 'break-word',
        }
    })
    
    const classes = useStyles();
    const {publishedDate} = book.volumeInfo;
    const date = new Date(publishedDate).getFullYear() || 'Unknown';
    const language = isoLangs[book.volumeInfo.language].name || 'Unknown';
    const publisher = book.volumeInfo.publisher || 'Unknown';
    const pages = book.volumeInfo.pageCount ? book.volumeInfo.pageCount+' pages' : 'Unknown';
    
    return (
        <Paper className={classes.root}>
            <h3 className={classes.title}>Details</h3>
            <div className={classes.content}>
                <div className={classes.column}>
                    <InfoCard title="Paperback" content={pages} />
                    <InfoCard title="Publisher" content={publisher} />
                </div>
                <div className={classes.column}>
                    <InfoCard title="Language" content={language} />
                    <InfoCard title="Published Date" content={date} />
                </div>
            </div>
        </Paper>
    )
}

export default BookDetails;