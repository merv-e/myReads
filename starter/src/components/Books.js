import React from 'react';
import Book from './Book';

const Books = ({ data, key, id, shelf, title, authors, url, book, updateBook, searchBook  }) => {
  //path: 
  return (
    <>
       {/* { 
       data.filter(book => book.shelf === shelf)
        .map((book, index) => (
          <Book
          key={index} 
          id={book.id} 
          title={book.title}
          shelf={book.shelf}
          authors={book.authors}
          urlWithThumbnail= {book.imageLinks.smallThumbnail }
        //   url = {book.imageLinks }
          theBook ={book}
          updateBook={updateBook} />
        ))
      }
      : */}
        {/* { 
          searchBook === null 
        ? <li> No book has been found </li> 
        : searchBook.filter(book => book.shelf ? book.shelf : "none")
        .map((book, index) => ( */}
          <Book
          key={id} 
          // id={id} 
          shelf={shelf}
          title={title}
          authors={authors}
          url= {url }
        //   url = {book.imageLinks }
          theBook ={book}
          updateBook={updateBook} />
        {/* ))
      }  */}
      
      </>
  )
}

export default Books
