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


const Index = ({readingNowBooks,fetchBooks, books, loading}) => {
    
    useEffect(() => {
        fetchBooks('computer programming');
    },[])
    return (
        <Layout>
        {console.log(books)}
            {loading ?
                <LoaderSkeleton />
                : <div>
                    <CategoryHorizontal title={"Computer Programming"}>
                        <ImageCardList books={books} />
                    </CategoryHorizontal>
                    <Category title={"Reading now"}>
                        <ReadingNowList readingNowBooks={readingNowBooks} />
                    </Category> 
                    
                  </div>
            }
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