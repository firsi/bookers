import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Navbar from "./Navbar";
import { theme } from '../theme/theme';

const Layout = ({children}) => {

    return(
        <div>
            <Provider store={store}>
                <Navbar />
                <main>
                    {children}
                </main>
            </Provider>
            
            <style jsx>{`
                main{
                    padding: ${theme.spacing.small};
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