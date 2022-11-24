import React, {useState} from 'react'
import BookShelfManager from './BookShelfManager'
import PropTypes from 'prop-types'


const Books = ({ shelf }) => {  

const [currentlyReading, setCurrentlyReading] = useState([]);
const [wantToRead, setWantToRead] = useState([]);
const [read, setRead] = useState([]);



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
                currentlyReading.map((book) => 
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
                      <BookShelfManager  /> 
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
                wantToRead.map((book) => 
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
                      <BookShelfManager  /> 
                      {/* addBookToCurrentlyReading={() => addBookToCurrentlyReading()} */}
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
                read.map((book) => 
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
                      <BookShelfManager  /> 
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

Books.propTypes = {
  currrentlyReading : PropTypes.array.isRequired,
  wantToRead : PropTypes.array.isRequired,
  read : PropTypes.array.isRequired,
}

export default Books
