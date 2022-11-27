import React from 'react'

const BookShelf = ({ books }) => {
    const shelves = [
     "Currently Reading", 
     "Want To Read", 
     "Read",
     "None"
    ];

  return (
    <div className="list-books-content"> 
         <div> 
           <div className="bookshelf"> 
            <h2 className="bookshelf-title">{shelves[0]}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid"> 
              { 
                books.filter((book) => book.shelf === "currentlyReading")
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
               {/* <BookShelfManager 
               books ={books}
               name = {book.title}
               shelf={book.shelf} 
                            
               />     */}
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
  );
};

export default BookShelf
