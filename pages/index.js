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



const Index = ({fetchBooks, books, loading}) => {
    useEffect(() => {
        fetchBooks('computer programming');
    },[])
    
    return (
        <Layout>
        {console.log(books)}
            <Header />
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
        </Layout>
    )
}



const mapActionToProps = {
    fetchBooks,
}
const mapStateToProps = state => ({
    books: state.books.books.items,
    loading: state.books.loading,
})
export default connect(mapStateToProps, mapActionToProps)(Index);