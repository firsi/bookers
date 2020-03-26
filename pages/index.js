import { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from "../components/Layout.js"
import Category from "../components/containers/Category.js"
import ReadingNowList from '../components/ReadingNowList';
import ImageCardList from '../components/ImageCardList.js';
import { CategoryHorizontal } from '../components/containers/CategoryHorizontal';
import { fetchBooks } from '../redux/actions/booksActions.js';
import { db } from '../util/base';
import LoaderSkeleton from '../components/LoaderSkeleton.js';
import { Header } from '../components/Header.js';
import { Features } from '../components/Features.js';
import { Tracking } from '../components/Tracking.js';
import { useAuthenticatedValue } from '../context/Auth-context.js';


const Index = ({readingNowBooks,fetchBooks, books, loading}) => {
    const {authenticated} = useAuthenticatedValue();
    useEffect(() => {
        fetchBooks('computer programming');
    },[])
    
    return (
        <Layout>
        {console.log(books)}
            {!authenticated && <Header />}
            <Features />
            {loading ?
                <LoaderSkeleton />
                : <div>
                    <CategoryHorizontal title={"Computer Programming Books"}>
                        <ImageCardList books={books} />
                    </CategoryHorizontal> 
                  </div>
            }
            <Tracking />
            {authenticated && 
                <Category title={"Reading now"}>
                    <ReadingNowList readingNowBooks={readingNowBooks} />
                </Category>}
        </Layout>
    )
}

Index.getInitialProps = async () => {
    return db.collection('reading_list')
            .where('status', '==', 'Reading now')
            .get()
            .then(data => {
                let readingNowBooks = [];
                data.forEach(doc => {
                    readingNowBooks.push(doc.data())
                })
                return {
                    readingNowBooks
                }
            })
            .catch(error => console.log(error));
}

const mapActionToProps = {
    fetchBooks,
}
const mapStateToProps = state => ({
    books: state.books.books.items,
    loading: state.books.loading,
})
export default connect(mapStateToProps, mapActionToProps)(Index);