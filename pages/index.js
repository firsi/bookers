import { db } from '../util/base'
import Layout from "../components/Layout.js"
import Category from "../components/containers/Category.js"
import ImageCard from "../components/ImageCard";
import ReadingNowList from '../components/ReadingNowList';
import { connect } from 'react-redux';


const Index = ({readingNowBooks}) => {

    return (
        <Layout>
            <div>
                {/* <Category title={"Trending"}>
                    <ImageCard />
                </Category> */}
                <Category title={"Reading now"}>
                    <ReadingNowList readingNowBooks={readingNowBooks} />
                </Category> 
                
            </div>
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


export default Index;