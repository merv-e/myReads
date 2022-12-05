import React from 'react';
import Book from './Book';

const Books = ({data, updateBook, shelf}) => {
  return (
    <ol className="books-grid"> 
          {
            data.filter(book => book.shelf === shelf)
            .map((book, index) => (
              <Book
              key={index} 
              id={book.id} 
              title={book.title} 
              shelf={book.shelf}
              authors={book.authors.join(", ")}
              url = {book.imageLinks.smallThumbnail}
              theBook ={book}
              updateBook={updateBook} />
            ))
          }
    </ol>
  )
}

export default Books
