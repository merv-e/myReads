import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BookShelfManager from './BookShelfManager';
import serializeForm from 'form-serialize';

const SearchBooks = ({ data, updateBook, onSearch, newSetOfBooks }) => {

  const [text, setText] = useState("");

  const searchBook =   
    text === "" 
    ? []
    : newSetOfBooks.filter((book) => 
  book.title.toLowerCase().includes(text.toLowerCase()));

  const handleInput = (event) => {
    event.preventDefault(); // is this needed?
    const books = serializeForm(event.target, {hash: true} );
    // ev.tar.value da olabilir bu kısım.

    if (onSearch){
      onSearch(books, 20);
    };
    console.log("books:", books)
  };

  return (
    <div className="search-books">
          <div className="search-books-bar">  
            <Link to='/'
              className="close-search">
            Close
            </Link>
            <div className="search-books-input-wrapper">
            <form onSubmit={handleInput}>
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={text}
                onInput= {(e) => setText(e.target.value)}
              />
            </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                searchBook.map(book =>
                  <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage:
                            `url(${book.imageLinks.smallThumbnail})`
                        }}
                      ></div>
                      <BookShelfManager
                      updateBook={updateBook}
                      theBook = {book}
                      name = {book.title}
                      shelf={book.shelf}                
                      />    
                    </div>
                    <div className="book-title">{book.title}</div> 
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>  
                )
              }
            </ol>
          </div>
        </div>
  )
}

export default SearchBooks
