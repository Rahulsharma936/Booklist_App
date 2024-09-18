import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar=()=>{
    const {books}=useContext(BookContext);
    return(
        <div className="navbar">
            <h1>Rahul's reading List</h1>
            <p>there are total {books.length} books to read</p>
        </div>
    )
}
export default Navbar;
