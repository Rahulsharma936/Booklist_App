import React,{useContext,useState} from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm=(filteredBooks)=>{
    const {dispatch}=useContext(BookContext);
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    // const[searchTerm,setSearchTerm]=useState('');
    function handleSubmit(e){
        e.preventDefault();
      dispatch({type:"ADD_BOOK",book:{
        title,author
      }});
        setTitle('');
        setAuthor('');  
    }
    // function handleSearch(e) {
    //     const term = e.target.value;
    //     setSearchTerm(term);
    //     updateSearchTerm(term);  
    // }
    return(
        
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='book-title' value={title} 
            onChange={(e)=>setTitle(e.target.value)} required/>
            <input type="text" placeholder='book-author' value={author} 
            onChange={(e)=>setAuthor(e.target.value)} required/>    
            <input type="submit" value="addbook" />

            {/* <input type="text" placeholder='search books or author' value={searchTerm}
            onChange={handleSearch}  /> */}
               
        </form>
        
       
    )
}


export default NewBookForm;

