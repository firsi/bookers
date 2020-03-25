import { Grid, Button, makeStyles } from "@material-ui/core"

import ReadingSvg from "../assets/book_reading.svg";
import { theme } from "../theme/theme";

const useStyles = makeStyles((mtheme) => ({
    root: {
        [mtheme.breakpoints.up('xs')]: {
            flexDirection: 'column-reverse',
        },
        [mtheme.breakpoints.up('sm')]: {
            flexDirection: 'initial',
        },
        marginBottom: mtheme.spacing(8)
    },
    containedPrimary: {
        backgroundColor: theme.color.primary_light,
    },
    title: {
        fontSize: '3.5em',
        [mtheme.breakpoints.up('xs')]: {
            fontSize: '2em'
        }
    },
    readingSvg: {
        [mtheme.breakpoints.up('xs')]: {
            width:'370px',
            height: 'auto',
          },
          [mtheme.breakpoints.up('sm')]: {
            width:'550px',
            height: 'auto',
          },
          [mtheme.breakpoints.up('md')]: {
            width:'750px',
            height: 'auto',
          },
          [mtheme.breakpoints.up('lg')]: {
            width:'auto',
            height: 'auto',
          },
    }
}))
export const Header = () => {

    const classes = useStyles();
    return (
        <Grid className={classes.root} container alignItems="center">
            <Grid item xs={12} sm={4} >
                <h1 className={classes.title}>Your Book Organizer</h1>
                <p>Keep Track of your book reading habits, sign up for free to get instant access!</p>
                <Button className={classes.containedPrimary} size="large" variant="contained" color="primary">Sign up</Button>
            </Grid>
            <Grid item xs={12} sm={8}>
                <ReadingSvg className={classes.readingSvg}/>
            </Grid>
        </Grid>
    )
}