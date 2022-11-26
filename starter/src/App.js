import "./App.css";
import { useEffect, useState } from "react";
import Books from "./components/Books";
import * as BooksAPI from "./BooksAPI";


const App = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);

     const [allBooks, setAllBooks] = useState([]);   

      useEffect(()=> { 
       const getBooks = async() => {
         const res = await BooksAPI.getAll();
         setAllBooks(res);
         console.log(res);
       }
       getBooks();
     }, []);

      useEffect(()=> {
        const updateBook = async() => { 
          const res = await BooksAPI.update();
          
        }
      }, []);
  
  return (
    <div className="app">

      {showSearchPage ? (    
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        
        <div className="list-books">     
          <Books 
           allBooks = {allBooks}
          />

          <div className="open-search">    
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
