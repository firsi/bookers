import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import InfoCard  from '../components/InfoCard';
import BookDataTable from '../components/BookDataTable';

import { fetchSavedBooks } from '../redux/actions/saveBookAction';
import { theme } from '../theme/theme';

const useStyles = makeStyles({
    summupContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing.small,
        borderBottom: `1px solid ${theme.color.secondary}`,
    },
    innerClass : {
        display: 'flex',
        padding: 0,
        textAlign: 'center',
        justifyContent: 'flex-end',
    },
    itemClass : {
        display: 'inline-block',
        lineHeight: '32px',
        width: '32px',
        height: '32px',
        border: `1px solid ${theme.color.primary_light}`,
        "& a": {
            color: theme.color.primary_light,
            textDecoration: 'none',
            fontWeight: 'bold'
        }
    },
    activeClass : {
        backgroundColor: theme.color.primary,
        '& a': {
            color: '#fff'
        }
    },
    disabledClass : {
        backgroundColor: '#d3d3d3',
        borderColor: '#8f8f8f',
        "& a": {
            color: 'grey',
        }
    }
})

const MyBooks = ({fetchSavedBooks, books, booksCount}) =>  {
    const [activePage, setActivePage] = useState(1);
    const [activeBooks, setActiveBooks] = useState(books.slice(0,10));
    const itemsCountPerPage = 10;

   useEffect(() => {
        fetchSavedBooks();
   }, []);
   
   const handlePage = (pageNumber) => {
        setActivePage(pageNumber);
        setActiveBooks(sliceBooks(pageNumber));
   }

   const sliceBooks = (pageNumber) => {
        let startIndex = (pageNumber * itemsCountPerPage) - itemsCountPerPage;
        let endIndex = itemsCountPerPage*pageNumber;
        return books.slice(startIndex, endIndex);
   }

   const classes = useStyles();
    return (
        <Layout>
            <div className={classes.summupContainer}>
                <InfoCard title={'Books Read'} content={booksCount.read} inverse={true}/>
                <InfoCard title={'Books Started'} content={booksCount.reading} inverse={true}/>
                <InfoCard title={'Books To Read'} content={booksCount.toRead} inverse={true}/>
            </div>
            <BookDataTable data={activeBooks} />
            <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={books?.length}
                pageRangeDisplayed={5}
                onChange={handlePage}
                innerClass={classes.innerClass}
                itemClass={classes.itemClass}
                activeClass={classes.activeClass}
                activeLinkClass={classes.activeLinkClass}
                disabledClass={classes.disabledClass}
            />
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    books : state.saveBook.savedBooks,
    booksCount : state.saveBook.booksCount
})

const mapActionToProps = {
    fetchSavedBooks
}


export default connect(mapStateToProps, mapActionToProps)(MyBooks);