import Link from 'next/link';
import { theme } from '../theme/theme';

const Menu = () => {
    return(
        <ul>
            <li><Link href="/MyBooks"><a>My Books</a></Link></li>
            <li><Link href="/MyStats"><a>My Stats</a></Link></li>
            <li><Link href="/"><a>My Planner</a></Link></li>

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