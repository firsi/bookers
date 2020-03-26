import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: 'auto',
  },
  image: {
      width: 'auto',
      height: '200px',
  }
});

export const RoundImageCard = ({title, image: Component , children}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Component className={classes.image}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {children}
          </Typography>
        </CardContent>
    </Card>
  );
}
