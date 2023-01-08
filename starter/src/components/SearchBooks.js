import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from "../BooksAPI";

const SearchBooks = ({ data, updateBook }) => {

  const [query, setQuery] = useState("");
  // const [loading, setLoading] = useState();

 // data comes with the API call will be stored in the variable below for the search page.  
  const [newSetOfBooks, setNewSetOfBooks] = useState([]);

  // it'll take the query variable (a.k.a where user searchs for books) , if it's empty which is the default value, it'll show nothing. However, if user starts typing something the query will be updated and searchBook variable will filter it accordingly.
 
  const searchBook =   
    query === "" 
    ? [] 
    : newSetOfBooks.filter((book) => 
    book.title.toLowerCase().includes(query.toLowerCase())
    || book.authors[0].toLowerCase().includes(query.toLowerCase())  
    // || book.authors[1].toLowerCase().includes(query.toLowerCase())
    // ||book.industryIdentifiers[0].idendifier.includes(query)
    // || book.industryIdentifiers[1].idendifier.includes(query)
    );
    
    const handleChange = (e) => {
        setQuery(e.target.value);
      };  

    useEffect(()=> {
      // when the user navigates to the search page and types a title, id etc. it'll show the relevant books.
      const search = async () => { 
        const result = await BooksAPI.search(query, 20).then(book => setNewSetOfBooks(book));
        // this is where we also capture what user types and send it to make a call to the API so that searchBook variable can filter the books for us.
       
        // console.log(newSetOfBooks);
      };

      const limit =
      //() => {
          setTimeout(()=> {
            search();
        }, 2000);
        
        console.log("searching");
        
        return () => {
            clearTimeout(limit);
            console.log("cleanup");
        }
      
      // }
    }, [newSetOfBooks, query]); //newSetOFBooks dependency array'den kaldırılınca sürekli re-render yapmıyor!
    
    
  // const stop = () => {
  // };

  return (
    <div className="search-books">
          <div className="search-books-bar">  
            <Link to='/'
              className="close-search">
            Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange= {handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
          {/* Books'da ol kısmını Shelf'e taşımamız lazım! */}
          <ol className="books-grid"> 
          {searchBook.map(book => (
            <Book 
              key={book.id}
              // id = {book.id}
              shelf={book.shelf ? book.shelf : "none"}
              title = {book.title}
              authors = {book.authors}
              url={book.imageLinks.smallThumbnail }
              book = {book}
              searchBook = {searchBook}
              updateBook = {updateBook}
            /> 
          ))
          }
          </ol>
          </div>
        </div>
  )
}

export default SearchBooks

/* 
 <ol className="books-grid">
              {
                searchBook === null 
                ? 
              <li> No book has been found </li> 
                : 
                searchBook.map(book =>
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
                      updateBook={updateBook}
                      theBook = {book}
                      name = {book.title}
                      shelf="none"
                      // newSetOfBooks={newSetOfBooks}  
                      // handleChange={handleChange}              
                      />    
                    </div>
                    <div className="book-title">{book.title}</div> 
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>  
                )
              }
            </ol>
*/