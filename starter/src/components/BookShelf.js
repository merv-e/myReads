import React from 'react'
import BookShelfManager from './BookShelfManager'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BookShelf = ({ data, updateBook, getBooks }) => {   

  return (
  <div className="list-books"> 
    <div className="list-books-title"> 
        <h1>MyReads</h1>
    </div>
    <div className="list-books-content"> 
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid"> 
              { 
                data.filter((book) => book.shelf === "currentlyReading")
                .map((book) => 
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
                      getBooks={getBooks}                
                      />    
                    </div>
                    <div className="book-title">{book.title}</div> 
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>        
                )}
              </ol>
            </div>
          </div>


          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid"> 
              { 
                data.filter((book) => book.shelf === "wantToRead")
                .map((book) => 
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
                      data={data}
                      name = {book.title}
                      shelf={book.shelf} />
                    </div>
                    <div className="book-title">{book.title}</div> 
                    <div className="book-authors">{book.authors}</div>
                  </div>
                
                </li>        
                )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid"> 
              { 
                data.filter((book) => book.shelf === "read")
                .map((book) =>  
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
                     theBook = {book}
                     updateBook={updateBook}
                     data={data}
                     name = {book.title}
                     shelf={book.shelf} />
                    </div>
                    <div className="book-title">{book.title}</div> 
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>        
                )}
              </ol>
            </div>
          </div> 

              
          <div className="open-search">    
            <Link to="/search">Add a book</Link>
          </div>

        </div>
        </div>
  </div>
  )
}

BookShelf.propTypes = {
  data :  PropTypes.array.isRequired
}

export default BookShelf
