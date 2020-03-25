import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { theme } from '../theme/theme';
import { CardActionArea } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    maxHeight: props => props.height || 100,
    padding:  props => props.rootPadding || '1em',
    marginBottom: '1em',
    marginRight: '1em',
    flex: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    color: 'white',
    padding: '10px 24px',
  },
  media: {
    width: props => props.coverWidth || 110,
    maxWidth: props => props.coverWidth || 110,
    minWidth: props => props.coverWidth || 110,
    height: props => props.coverHeight || 100,
    maxHeight: props => props.maxCoverHeight || 100,
    borderRadius:  props => props.coverRadius || '10px',
  },
 
  
}));

const SideImageCard = ({imageUrl, 
                        imageAlt, 
                        handleClick, 
                        coverWidth, 
                        coverRadius,
                        maxCoverHeight, 
                        coverHeight, 
                        height, 
                        rootPadding,
                        children}) => {
  
  const classes = useStyles({coverWidth, coverRadius, maxCoverHeight, rootPadding, coverHeight, height});
  
  return (
    <Card className={classes.root}>
      <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imageAlt}
        />
      <CardActionArea onClick={handleClick}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
              {children}
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

SideImageCard.defaultProps = {
  imageUrl : 'https://advancepetproduct.com/wp-content/uploads/2019/04/no-image.png',
  imageAlt : 'Unknown',
}

export default SideImageCard;