import { Grid, Typography, makeStyles } from "@material-ui/core";
import DataSvg from "../assets/data.svg";

const useStyles = makeStyles(mtheme => ({
    root: {
        marginBottom: mtheme.spacing(6),
        backgroundColor: '#e2e2e8',
        padding: mtheme.spacing(6),
    },
    dataSvg: {
        width:'330px',
        height: 'auto',
        [mtheme.breakpoints.up('sm')]: {
            width: '450px',
            
        },
        [mtheme.breakpoints.up('md')]: {
            width: '620px',
            
        }
    },
    title: {
        fontSize: '2em',
        [mtheme.breakpoints.up('md')]: {
            fontSize: '3em' 
        }
    }
}))

export const Tracking = () => {
    const classes = useStyles();
    return (
        <section>
            <Grid container className={classes.root} justify='center' alignItems='center'>
                <Grid item xs={12} md={8}>
                    <DataSvg className={classes.dataSvg}/>
                </Grid>
                <Grid item xs={12} md={4} >
                    <h2 className={classes.title}>Tracking made easy</h2>
                    <Typography variant="body2" color="textSecondary" component="p">
                        With our systems and efficient algorithm, keep track of the books you read, 
                        and the ones you want to read in the future. We will analyse your data and gives 
                        you advices on how to improve your reading.
                    </Typography>
                </Grid>
            </Grid>
        </section>
    )
}