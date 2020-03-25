import { RoundImageCard } from "./RoundImageCard";
import FreeSvg from '../assets/savings.svg';
import ChartSvg from '../assets/chart.svg';
import BookshelvesSvg from '../assets/bookshelves.svg';
import { Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(mtheme => ({
    section: {
        backgroundColor: '#979add',
        padding: mtheme.spacing(8),
        marginBottom: mtheme.spacing(8),
    }
}))
export const Features = () => {

    const classes = useStyles();
    return (
        <section className={classes.section} >
            <Grid container spacing={6}>
                <Grid item xs={12} md={4} >
                    <RoundImageCard 
                        title="Totally free"
                        image={FreeSvg}
                    >
                        No Hidden fees, all of our services are totally free!
                        Use all of our features without fearing for your wallet.
                        We are and we will always be free.
                    </RoundImageCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <RoundImageCard 
                        title="Vast Selection"
                        image={BookshelvesSvg}
                    >
                       With thousainds of books, you'll be sploit of choices.
                       All you need to do is choose a book, and you are ready to go.
                    </RoundImageCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <RoundImageCard 
                        title="Data Tracking"
                        image={ChartSvg}
                    >
                        We will collect data about your reading habits, and give you daily advices 
                        about how to read faster and better. Keep track of all the books you read!
                    </RoundImageCard>
                </Grid>
            </Grid>
        </section>
    )
}