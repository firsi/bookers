import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSavedBooks } from '../redux/actions/saveBookAction';
import Layout from '../components/Layout';
import InfoCard  from '../components/InfoCard';
import { theme } from '../theme/theme';
import BookDataTable from '../components/BookDataTable';

const MyBooks = ({fetchSavedBooks, books, booksCount}) =>  {

   useEffect(() => {
        fetchSavedBooks();
   }, []);
   
    return (
        <Layout>
            <div className="summup-container">
                <InfoCard title={'Books Read'} content={booksCount.read} inverse={true}/>
                <InfoCard title={'Books Started'} content={booksCount.reading} inverse={true}/>
                <InfoCard title={'Books To Read'} content={booksCount.toRead} inverse={true}/>
            </div>
            <BookDataTable data={books} />
            <style jsx>{`
                .summup-container{
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: ${theme.spacing.small};
                    border-bottom: 1px solid ${theme.color.secondary};
                }
                `}
            </style>
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