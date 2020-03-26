import Navbar from "./Navbar";
import { theme } from '../theme/theme';

const Layout = ({children}) => {

    return(
        <div>
            <Navbar />
            <main>
                {children}
            </main>   

            <style jsx>{`
                main{
                    padding: ${theme.spacing.small} ;
                }
                @media screen and (min-width: 600px){
                    main{
                        padding: ${theme.spacing.small} ${theme.spacing.medium};
                    }
                }
            `}
            </style>
           
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
                html,body{
                    margin: 0;
                    font-family: 'Raleway', Arial, sans-serif;
                    overflow-x: hidden;
                }
                body{
                    min-height: 100%;
                    background-color: #f3f3f3;
                },
            `}
            </style>
        </div>
    )
}

export default Layout;