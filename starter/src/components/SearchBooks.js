import React from 'react'

const SearchBooks = ({shelf}) => {
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
                shelf.map((book) => 
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
                      {/* <BookShelfManager  />  */}
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
           
        </div>
    </div>
    </>   
  )
}

export default SearchBooks
