import React, { useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import fakeAuthProvider from './Auth';

const AuthContext  = React.createContext(null);
export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    const signin = (newUser, callback) => {
        return fakeAuthProvider.sigin(()=>{
            setUser(newUser);
            callback();
        })
    }

    const signout = (callback) => {
        return fakeAuthProvider.signout(()=>{
            setUser(null);
            callback()
        })
    }

    const value = {user, signin, signout}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
    return React.useContext(AuthContext)
}


export function RequireAuth(){
    const auth = useAuth();
    const location = useLocation();
    if(!auth.user){
        return <Navigate to="/login" state={{from:location}}/>
    }

    return <Outlet/>
}