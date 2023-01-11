import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from "../BooksAPI";
import SearchedBooksWithShelfInfo from './SearchedBooksWithShelfInfo';
import { PropTypes } from 'prop-types';

const SearchBooks = ({ data, updateBook, getBook }) => {

  const [query, setQuery] = useState("");
  // const [loading, setLoading] = useState();

 // data comes with the API call will be stored in the variable below for the search page.  
  const [newSetOfBooks, setNewSetOfBooks] = useState([]);

  // it'll take the query variable (a.k.a where user searchs for books) , if it's empty which is the default value, it'll show nothing. However, if user starts typing something the query will be updated and searchBook variable will filter it accordingly.
 
  const searchBook =   
    query === "" // ||  query.length >=1 // query.length === 0
    ? [] 
    : newSetOfBooks.filter((book) => 
    book.title.toLowerCase().includes(query.toLowerCase())
    || book.authors[0].toLowerCase().includes(query.toLowerCase())  
    || book.authors[1].toLowerCase().includes(query.toLowerCase())
    ||book.industryIdentifiers[0].idendifier.includes(query)
    || book.industryIdentifiers[1].idendifier.includes(query)
    )

    const handleChange = (e) => {
        setQuery(e.target.value);
      };  
      
      useEffect(()=> {
        // when the user navigates to the search page and types a title, id etc. it'll show the relevant books.
        const search = async () => { 
          const result = await BooksAPI.search(query, 20).then(book => setNewSetOfBooks(book));
          // this is where we also capture what user types and send it to make a call to the API so that searchBook variable can filter the books for us.
        };
        
        const limit = setTimeout(()=> {
          search();
          // console.log("searching");
        }, 5000);
        
        return () => {
          clearTimeout(limit);
          // console.log("cleanup");
        }
    }, [newSetOfBooks, query]); //newSetOFBooks dependency array'den kaldırılınca sürekli re-render yapmiyor!
    
    // console.log(newSetOfBooks);

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
         <SearchedBooksWithShelfInfo 
          searchBook={ searchBook}
          data = {data}
          updateBook = {updateBook}
          getBook = {getBook}
         />
          </div>
        </div>
  )
}

SearchBooks.propTypes = {
  data: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default SearchBooks