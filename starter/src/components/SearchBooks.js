import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BookShelfManager from './BookShelfManager';

const SearchBooks = ({ data, updateBook }) => {

  const [text, setText] = useState("");

  const books =   
    text === "" 
    ? data 
    : data.filter((book) => book.title.toLowerCase().includes(text.toLowerCase()));

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
                value={text}
                onChange = {(event)=> setText(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                books.map(book =>
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
