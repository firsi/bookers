import fetch from 'isomorphic-fetch';
import Layout from "../../components/Layout";
import BookList from "../../components/BookList";
import { API } from '../../util/API';


const Search = ({books, keywords}) => {
    
    return(
        <Layout>
            <div>
                <h2>Search results for {keywords}...</h2>
                <BookList books={books} />
            </div>
        </Layout>
    )
}



Search.getInitialProps = async ({query}) => {
    const result = 
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query.id}&key=${API}`);
    const data = result.json();

    return data.then(books => 
        ({books: books.items,
          keywords: query.id
        })
    
        )
        .catch(error => {
            console.log(error);
        })
}
export default Search;