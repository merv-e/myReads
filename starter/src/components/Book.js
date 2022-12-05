import React, { useState } from 'react'
import BookShelfManager from './BookShelfManager'

const Book = ({shelf, data, updateBook, getBook, theBook}) => {

  //Su anda bu theBook ve shelf bilgisini BookShelf.js'den aliyor. Ancak o component değiştirildiğinde ya da silindiğinde bu bilgileri alamayacak, dolayısıyla baska bir cozum yolu bulunması gerek!
  
  const [currentlyReading, setCurrentlyReading] = useState([]);
  
  const [wantToRead, setWantToRead] = useState([]);
              
  const [read, setRead] = useState([]);
            
  const [none, setNone] = useState([]);
  
  // const books =  data.forEach((book) => book.shelf === "currentlyReading" ? setCurrentlyReading(): setRead() );

  if (shelf === "currentlyReading") setCurrentlyReading(currentlyReading.concat(theBook));
  else if (shelf === "wantToRead") setWantToRead([...wantToRead, theBook])
  else if (shelf === "read") setRead([...read, theBook])
  else setNone([...none, theBook]);

  return (
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
                  data = {data}
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
            )}
          </ol>
        </div>
    </div>
  )
}

export default Book
