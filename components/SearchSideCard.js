import { makeStyles} from '@material-ui/core/styles';
import SideImageCard from './SideImageCard';
import { theme } from '../theme/theme';

const useStyles = makeStyles(() => ({
    title: {
        fontSize: '1.1em',
        width: '95%',
        color: theme.color.primary_dark,
        fontWeight: 900,
        marginTop: '0.5em',
        marginBottom: '0.5em',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    author: {
      fontSize: '0.75em',
      color: 'grey',
      width: '95%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    category: {
        fontSize: '0.75em',
        color: 'grey',
        width: '95%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
  }));

const SearchSideCard = ({imageUrl, imageAlt, category, title, author, handleClick}) => {
    const classes = useStyles();

    return(
        <SideImageCard
            imageUrl={imageUrl} 
            imageAlt={imageAlt}
            handleClick={handleClick}
        >
            <div className={classes.category}><span>{category}</span></div>
            <p className={classes.title}>{title}</p>
            <div className={classes.author}><span>{author}</span></div>
        </SideImageCard>
    )
}

SearchSideCard.defaultProps = {
    category: 'Unknown',
    title: 'Unknown',
    author: 'Unknown'
}

export default SearchSideCard;