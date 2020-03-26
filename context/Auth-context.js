import { useState, createContext, useEffect, useContext } from 'react';
import { auth } from '../util/base';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                setAuthenticated(true)
            }
            else{
                setAuthenticated(false)
            }
        })
    },[setAuthenticated]);

    return (
        <AuthContext.Provider value={{authenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthenticatedValue = () => useContext(AuthContext);