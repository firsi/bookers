import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { theme as mainTheme} from '../../theme/theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginBottom: '2em',
    [theme.breakpoints.up('md')]: {
      overflow: 'initial',
    },
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: mainTheme.color.primary_dark,
    fontSize: mainTheme.font.small,
    marginBottom: theme.spacing(5),
  },
}));


export const CategoryHorizontal = ({children, title}) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');;
  return (
    <div>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.root}>
          {!matches ? <GridList className={classes.gridList} cols={2.5}>
                        {children}
                    </GridList>
                  : <GridList  spacing={8} cols={4} cellHeight={"auto"}>
                        {children}
                    </GridList>
          
          }
        </div>
    </div>
  );
}
