import dynamic from "next/dynamic";
import { useEffect } from "react";
import Layout from "../components/Layout";
import InfoCard from "../components/InfoCard";
import { connect } from 'react-redux';
import { fetchSavedBooks } from "../redux/actions/saveBookAction";
import { date_diff_indays, computePercent } from "../util/helpers";
import { MONTHS } from "../util/constants";
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../theme/theme';
import { Grid, Paper } from "@material-ui/core";
import DotLoader from "react-spinners/DotLoader";
import { authMiddleware } from "../util/authMiddleware";
import { NoData } from "../components/NoData";
import ReadingNowList from "../components/ReadingNowList";
import { auth } from "../util/base";
const LinePlot =  dynamic(() => import("../components/LinePlot"));
const PiePlot = dynamic(() => import("../components/PiePlot"))
const BarPlot = dynamic(() => import("../components/BarPlot"))

const useStyles = makeStyles({
    summupContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing.very_small,
        borderBottom: `1px solid ${theme.color.secondary}`,
    },
})


const MyStats = ({books, booksCount, loading, fetchSavedBooks}) => {
    
    
    useEffect(() => {
        fetchSavedBooks();
    }, [])

    // Average time to complete a book
    const monthlyBookCompletionFunc = () => {
        const monthlyBookCompletion = Array.from({length: 12}, ()=>(0));
        books.map(book => {
            if(book.bookInfo.status === "Finished" && book.bookInfo.startedAt !=="---"){
                const startedAt = book.bookInfo.startedAt.toDate();
                const finishedAt = book.bookInfo.finishedAt.toDate();
                const index = startedAt.getMonth();
                const dateDif = date_diff_indays(startedAt, finishedAt);
                monthlyBookCompletion[index] = (monthlyBookCompletion[index] + dateDif) / 2;
            }
        })
        return setData(monthlyBookCompletion);
        
    }

    // Books Status: Started, Reading now, Finished
    const setBookStatusData = () => {
        const totalBooks = books.length;
        return [
            { item: 'Not started', percent: computePercent(totalBooks, booksCount.read) },
            { item: 'Reading now', percent: computePercent(totalBooks, booksCount.reading) },
            { item: 'Finished', percent: computePercent(totalBooks, booksCount.toRead) },
        ]
    }
    
    // Number of Books Read per month
    const setBooksReadPerMonthData = () => {
        const booksReadPerMonth = computeBooksReadPerMonth();
        return setData(booksReadPerMonth);
    }

    const computeBooksReadPerMonth = () => {
        const booksReadPerMonth = Array.from({length: 12}, ()=>(0));
        books.map(book => {
            if(book.bookInfo.status === "Finished"){
                const month = book.bookInfo.finishedAt.toDate().getMonth();
                booksReadPerMonth[month] += 1; 
            }
        })
        return booksReadPerMonth;
    }
    
    // Set Data per month
    const setData = (valuesArr) => {
        let data = [];
        valuesArr.map((value, index) => {
            data.push({
                label: MONTHS[index],
                value: value
            })
        })
        return data;
    }

    // Sort Books the user is reading now   
    const setReadingNowBooks = () => {
        return books.filter(book => book.bookInfo.status === 'Reading now')
                    .slice(0,4);
    }
    
    const classes = useStyles();
    return(
        <Layout>
            {books.length == 0 ? <NoData />
            : <>
            <div className={classes.summupContainer}>
                <InfoCard title={'Books Read'} content={booksCount.read} inverse/>
                <InfoCard title={'Books Started'} content={booksCount.reading} inverse/>
                <InfoCard title={'Books To Read'} content={booksCount.toRead} inverse/>
            </div>
            <h4>Reading now</h4>
            <ReadingNowList readingNowBooks={setReadingNowBooks()} />
            
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <h4>Average day to complete a book</h4>
                    <Paper >
                    {loading ? <DotLoader
                                        size={150}
                                        color={"#123abc"}
                                        loading={loading}
                                    /> 
                        
                                    : <LinePlot data={monthlyBookCompletionFunc()} />}
                    </Paper>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <h4>My books status</h4>
                    <Paper>
                        {loading ? <DotLoader
                                        size={150}
                                        color={"#123abc"}
                                        loading={loading}
                                    /> 
                        
                                    : <PiePlot data={setBookStatusData()}/>}
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <h4>Books Read per month</h4>
                    <Paper>
                    {loading ? <DotLoader
                                        size={150}
                                        color={"#123abc"}
                                        loading={loading}
                                    /> 
                        
                                    :<BarPlot data={setBooksReadPerMonthData()} />}  
                    </Paper>
                </Grid>
                
            </Grid>
             </>}
        </Layout>
    )
}
 

const mapPropsToState = (state) => ({
    books : state.saveBook.savedBooks,
    booksCount : state.saveBook.booksCount,
    loading: state.books.loading,
})

const mapActionToProps = {
    fetchSavedBooks
}

export async function getServerSideProps({ res }) {
    auth.onAuthStateChanged(user => {
        if(user){
            console.log(`${user} signed in successfully`);
        }
        else{
            res.writeHead(302, {
                Location: "/login_signup",
              });
              // don't forget the res.end to redirect correctly
              res.end();
        }
    })
  
    return {
      props: {},
    };
  }
  

export default connect(mapPropsToState, mapActionToProps)(MyStats);

