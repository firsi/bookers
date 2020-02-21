import Link from 'next/link';
import Router  from 'next/router';
import { theme } from '../theme/theme';
import SimpleSearchBar from './SimpleSearchBar';
import Menu from './Menu';



const Navbar = () => {

    const handleSearch = (value) => {
        Router.push(`/search/${value}`);
    }

    return(
        <nav>
            <div className="logo">
                <Link href="/"><a>Bookers</a></Link>
            </div>
            <Menu />
            <SimpleSearchBar handleSearch={handleSearch}/>
            
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



export default Navbar;