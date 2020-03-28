import Link from 'next/link';
import { theme } from '../theme/theme';
import { auth } from '../util/base';
import  Router  from 'next/router';
import { useAuthenticatedValue } from '../context/Auth-context';

const Menu = () => {
    const {authenticated} = useAuthenticatedValue();
    
    const logout = () => {
        auth.signOut()
        .then(() => {
            Router.push('/')
        })
        .catch(error => console.log(error))
    }

    return(
        <ul>
            {
                authenticated ? 
                <>
                    <li><Link href="/MyBooks"><a>My Books</a></Link></li>
                    <li><Link href="/MyStats"><a>My Stats</a></Link></li>
                    <li><Link href="/"><a>My Planner</a></Link></li>
                    <li ><a onClick={() => logout()}>Logout</a></li>
                </>
                : <li><Link href="/Login"><a>Login</a></Link></li> 
            }

            <style jsx>{`
                ul{
                    display: flex;
                    justify-content: center;
                    list-style: none;
                    padding-left: 0;
                    text-align: center;
                }
                li{
                    display: inline-block;
                    padding: ${theme.spacing.small}
                }

                a{
                    text-decoration: none;
                    color: inherit;
                    font-size: 0.9em;
                    cursor: pointer;
                }
                @media screen and (min-width: 960px){
                    ul{
                        margin: 0;
                    }
                }
            `}
            </style>
        </ul>
    )
}

export default Menu;