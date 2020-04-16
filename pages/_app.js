import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
import { AuthProvider } from '../context/Auth-context';
import { auth } from '../util/base';
import redirectTo from '../util/redirectTo';

class MyApp extends App {
 
    static async getInitialProps({Component, ctx}) {

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        // auth.onAuthStateChanged(user => {
        //     if(user){ 
        //         if(ctx.pathname == "/login_signup") {
        //             //shouldn't show the login page is we are already logged in
        //             console.log('user is connected')
        //              redirectTo('/', { res: ctx.res, status: 301 });  }
                  
        //     }
        //     else{
        //         if(ctx.pathname == "/login_signup" || ctx.pathname == "/") return;
        //         //if we are on any other page, redirect to the login page
        //         else redirectTo('/login_signup', { res: ctx.res, status: 301 })
        //         console.log('he is not')
        //     }
        // })

        
        
        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps, store} = this.props;

        return (
            <Provider store={store}>
                <AuthProvider>
                    <Component {...pageProps}/>
                </AuthProvider>
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);