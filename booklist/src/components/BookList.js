import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';


const BookList = () => {
    const { books} = useContext(BookContext);   
    // const filteredBooks = books.filter(book => 
    //     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     book.author.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <>
            {books.length ? (
                <div className="book-list">
                    <ul>
                        {books.map(book => (
                            <BookDetails book={book} key={book.id}  />

                        ))}
                    </ul>
                </div>
            ) : (
                <div className="empty">No books to read buddy, go fucking add some books</div>
            )}

            {/* <div className="filter-book">
                {filteredBooks.length ? ( 
                    <ul>
                        {filteredBooks.map(book => (
                            <BookDetails book={book} key={book.id} />
                        
                          
                        ))}
                    </ul>
                ) : (
                    <div className="empty">No books found</div>
                )}
            </div> */}
        </>
    );
};   
    
export default BookList;
