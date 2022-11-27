import React, { useState} from 'react'
import BookShelfManager from './BookShelfManager'
// import PropTypes from 'prop-types's


const BookShelf = ({ data, changeShelf }) => {  
  
  const changeShelfInMenu = () => {  
    
        // x();
  };
  return (
    <>
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
               changeShelf={changeShelf}
               changeShelfInMenu={changeShelfInMenu}
               data={data}
               name = {book.title}
               shelf={book.shelf}                
               />    
          {/* {console.log(book.shelf)} */}
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
                      changeShelfInMenu={changeShelfInMenu}
                      changeShelf=
                      {changeShelf}
                      id = {data.id}
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
                     changeShelfInMenu={changeShelfInMenu}
                     changeShelf={changeShelf} 
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
        </div>
    </div>
    </>   
  )
}

// Books.propTypes = {
//   books :  PropTypes.array.isRequired
// }

export default BookShelf
