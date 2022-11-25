import React, { useState} from 'react'
// import BookShelfManager from './BookShelfManager'
// import PropTypes from 'prop-types'


const Books = ({ defaultBooks}) => {  

  const [currentlyReading, setCurrentlyReading] = useState([defaultBooks[0], defaultBooks[1]]);

  const [wantToRead, setWantToRead] = useState([defaultBooks[2], defaultBooks[3], defaultBooks[4]]);

  const [read, setRead] = useState([defaultBooks[5], defaultBooks[6]]);

  const defaultValues = [
        "Currently Reading", 
        "Want To Read", 
        "Read",
        "None"];
    
  const [selectedValue, setSelectedValue] = useState("");

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
                          // book.imageLinks.smallThumbnail
                            `url(${book.backgroundImage})`
                        }}
                      ></div>
                    <div className="book-shelf-changer">
                      <select
                        value={selectedValue}
                        onChange={(ev) => setSelectedValue(ev.target.value) }>
                        {
                        defaultValues.map((value) => (
                        <option value={value} key={value}> {value} </option>
                      ))}
                      </select>
                    </div>
                      
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
                          `url(${book.backgroundImage})`
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select 
                          value={selectedValue}
                          onChange={(ev) => setSelectedValue(ev.target.value) }>
                          {
                          defaultValues.map((value) => (
                          <option value={value} key={value}> {value} </option>
                        ))}
                        </select>
                      </div>
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
                          `url(${book.backgroundImage})`
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select
                          value={selectedValue}
                          onChange={(ev) => setSelectedValue(ev.target.value) }>
                          {
                          defaultValues.map((value) => (
                          <option value={value} key={value}> {value} </option>
                        ))}
                        </select>
                    </div>
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
//   currrentlyReading : PropTypes.array.isRequired,
//   wantToRead : PropTypes.array.isRequired,
//   read : PropTypes.array.isRequired,
// }

export default Books
