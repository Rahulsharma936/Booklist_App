import React, { useState,createContext } from 'react'
export const AuthContext=createContext();
const AuthContextProvider=(props)=>{
    
    const [auth,setAuth]=useState(
        {isAuthenticated:false}
    );
    const toggleAuth=()=>{
        setAuth(previousAuth=>({
            ...previousAuth,
            isAuthenticated:!previousAuth.isAuthenticated
        }));
    };
    return(
        <AuthContext.Provider value={{...auth,setAuth,toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;