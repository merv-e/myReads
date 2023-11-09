import React from 'react'
import Book from '../Book';

const Shelves = ({shelfNamesImmutable, nameOfTheShelf, data, updateBook, getBook}) => {
 
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{nameOfTheShelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
          data.filter(book => book.shelf === shelfNamesImmutable)
          .map(book => 
            <Book 
              data={data} 
              key={book.id}
              id = {book.id}
              shelf={book.shelf}
              title = {book.title}
              authors = {book.authors}
              url={
                book.imageLinks 
                ? book.imageLinks.thumbnail 
                : book.imageLinks.smallThumbnail
                // book.imageLinks.smallThumbnail || book.imageLinks.thumbnail 
                }
              book = {book}
              updateBook={updateBook}
              getBook = {getBook}
            />  
        )}
          </ol>
        </div>
    </div>
  )
}

export default Shelves
