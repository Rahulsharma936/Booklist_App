import React from 'react'
import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar=()=>{
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const {isAuthenticated,toggleAuth}=useContext(AuthContext)
    if (!light || !dark) {
        console.error('ThemeContext is not providing expected values');
    }
  const theme= isLightTheme ? light :dark;
    return (
        <nav style={{background:theme.bg, color:theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Authenticated' : 'Not Authenticated'} 
            </div>
             <ul>
             <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
             </ul>
             
        </nav>
    )
}
export default Navbar;