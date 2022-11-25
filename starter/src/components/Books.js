import React, { useState} from 'react'
import BookShelfManager from './BookShelfManager'
// import PropTypes from 'prop-types'


const Books = ({ defaultBooks}) => {  

  const [values, setValues] = useState("");

  const [currentlyReading, setCurrentlyReading] = useState([defaultBooks[0], defaultBooks[1]]);

  const [wantToRead, setWantToRead] = useState([defaultBooks[2], defaultBooks[3], defaultBooks[4]]);

  const [read, setRead] = useState([defaultBooks[5], defaultBooks[6]]);

  const handleSelection = (e) => {
    setValues(e.target.value);

    for(let i=0 ; i<defaultBooks.length; i++) { 
      if (e.target.value === "currentlyReading") {
        if (e.target.id === defaultBooks[i].id){
          setCurrentlyReading(currentlyReading.concat(defaultBooks[i])) 
        } 
      }
        // : e.target.value === "WantToRead" 
        // ? setWantToRead(wantToRead.concat(defaultBooks[i])) 
        // : setRead(read.concat(defaultBooks[i])) ;

        // defaultBooks[i]
        console.log(e.target.id);
        console.log(e.target.value);

    }
  }
  // console.log(currentlyReading)

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
                      <BookShelfManager 
                      id={book.id}
                      name={book.title}
                      values={values}
                      handleSelection={handleSelection}
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
                      <BookShelfManager
                      id={book.id}
                      name={book.title}
                      values={values}
                      handleSelection={handleSelection}
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
                      <BookShelfManager
                        id={book.id}
                        name={book.title}
                        values={values}
                        handleSelection={handleSelection} 
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
