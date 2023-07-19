import React from 'react'
import Book from '../SharedComponents/Book';

const SearchedBooksWithShelfInfo = ({searchBook, books, updateBook, getBook, id, shelf }) => {

  const myBooksUpdated = 
    searchBook.map((book) => {
      books.map((b) => {
        if (book.id === b.id) {
         book.shelf = b.shelf
        } 
        return b;
      })
      return book;
    });

  return (
    <ol className="books-grid"> 
    {
      myBooksUpdated.map(book => (
        <Book 
          key={book.id}
          id = {book.id}
          shelf= {
            book.shelf 
            ? book.shelf 
            : "none"
          }
          title = {book.title}
          authors = {book.authors}
          url={
            book.imageLinks 
            ? book.imageLinks.thumbnail 
            : book.imageLinks.smallThumbnail
          }
          book = {book}
          searchBook = {searchBook}
          updateBook = {updateBook}
          getBook = {getBook}
        /> 
    ))
    }
    </ol>
  )
}

export default SearchedBooksWithShelfInfo
