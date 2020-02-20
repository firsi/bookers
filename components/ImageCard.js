import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import { theme } from '../theme/theme';

const useStyles = makeStyles({
    root: {
      maxWidth: 160,
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    media: {
      height: 140,
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    content: {
        padding: 0,
        '& h5': {
            color: theme.color.secondary_light,
            fontWeight: 400,
            fontSize: "1.3em",
            marginTop: "1em",
            marginBottom: "0.5em"
        }
    }
  });

const ImageCard = ({title, rating, imageAlt, imageUrl}) => {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imageAlt}
        />
        <CardContent className={classes.content}>
          <h5 >
          {title}
          </h5>
          <Rating
          name="Book Rating"
          value={rating}
          
          readOnly
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImageCard;