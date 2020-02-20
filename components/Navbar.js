import Link from 'next/link';
import { connect } from 'react-redux';
import { fetchBooks } from '../redux/actions/booksActions';
import { theme } from '../theme/theme';
import SearchBar from './SearchBar';
import Menu from './Menu';


const Navbar = ({fetchBooks}) => {

    const handleSearch = (event) => {
        fetchBooks(event.target.value);   
    }

    return(
        <nav>
            <div className="logo">
                <Link href="/"><a>Bookers</a></Link>
            </div>
            <Menu />
            <SearchBar handleSearch={handleSearch}/>

            <style jsx>{`
                nav{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: ${theme.color.primary_dark};
                    padding: ${theme.spacing.small};
                    color: ${theme.color.secondary_light};
                }
                .logo{
                    text-align: center;
                    font-size: 2em;
                    font-weight: 700;
                }
                
                a{
                    text-decoration: none;
                    color: inherit;
                }
            `}
            </style>
        </nav>
    )
}

const matchActionToProps =  {
        fetchBooks,
}

export default connect(null, matchActionToProps)(Navbar);