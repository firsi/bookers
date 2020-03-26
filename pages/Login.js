import Layout from "../components/Layout";
import { Grid, makeStyles } from "@material-ui/core";
import SimpleTabs from "../components/SimpleTab";

const useStyles = makeStyles(mtheme => ({
    registrationContainer: {
        
    },
    imageContainer: {
        height: '100vh',
        position: 'relative',
        zIndex: -1,
        marginTop: '-30px'
    },
    reading: {
        maxHeight: '100%'
    }
}))

const Login = () => {
    const classes = useStyles();
return (
    <Layout>
        <Grid container>
            <Grid item xs={12} md={5} className={classes.registrationContainer}>
                <h1>Register to Booker</h1>
                <small>Join Booker to keep track of your book reading habits</small>
                <SimpleTabs />
            </Grid>
            <Grid item  xs={false} md={7}>
                <div className={classes.imageContainer}>
                    <img className={classes.reading} src="/home_reading.jpg" alt="home" />
                </div>
            </Grid>
        </Grid>
        <style jsx global>{`
            html{
                overflow: hidden
            }
        `}
        </style>
    </Layout>
)
}

export default Login;