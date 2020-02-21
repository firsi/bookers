import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { theme as mainTheme} from '../../theme/theme';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginBottom: '2em'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: mainTheme.color.primary_dark,
    fontSize: mainTheme.font.small,
  },
}));


export const CategoryHorizontal = ({children, title}) => {
  const classes = useStyles();

  return (
    <div>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
            {children}
        </GridList>
        </div>
    </div>
  );
}
