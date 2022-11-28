import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BookShelfManager from './BookShelfManager';
// import serializeForm from 'form-serialize';

const SearchBooks = ({ data, updateBook, onSearch, newSetOfBooks }) => {

  const [query, setQuery] = useState("");

  const searchBook =   
    query === "" 
    ? [] 
    : newSetOfBooks.filter((book) => 
  book.title.toLowerCase().includes(query.toLowerCase()));

  const handleInput = (event) => {
    setQuery(event.target.value);
    // const books = serializeForm(event.target, {hash: true} );

    if (onSearch){
      onSearch(event.target.value, 20);
    };
    // console.log("books:", query)
  };


  return (
    <div className="search-books">
          <div className="search-books-bar">  
            <Link to='/'
              className="close-search">
            Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange= {handleInput}
              />
           {/* oninput da olabilir */}
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
                      id={book.id}
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
