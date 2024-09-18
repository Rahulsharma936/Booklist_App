import React,{createContext,useReducer,useEffect} from 'react'
import { bookReducer } from '../reducer/bookReducer';

export const BookContext= createContext();

const BookContextProvider=(props)=>{
    const [books,dispatch]=useReducer(bookReducer,[],()=>{
        const localData=localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
   
useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books))
},[books]);
    
   
return(
    <BookContext.Provider value={{books,dispatch}}>
        {props.children}
    </BookContext.Provider>
)
}

export default BookContextProvider;


 // const [searchTerm,setSearchterm]=useState('')


    // const addBooks=(title,author)=>{
    //     setBooks([...books,{title,author,id:uuidv4()}])
    // };

    // const removeBooks=(id)=>{
    //     setBooks(books.filter(book=>book.id !==id));
    // };

    // const editBook = (id, newTitle, newAuthor) => {
    //     setBooks(books.map(book => 
    //         book.id === id ? { ...book, title: newTitle, author: newAuthor } : book
    //     ));
    // };  

    // const updateSearchTerm=(term)=>{
    //     setSearchterm(term) ;    
    // };
