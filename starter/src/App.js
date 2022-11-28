import "./App.css";
import { useEffect, useState } from "react";
import BookShelf from "./components/BookShelf";
import * as BooksAPI from "./BooksAPI";


const App = () => {

  const [showSearchPage, setShowSearchpage] = useState(false);

  const [data, setData] = useState([]);   

  useEffect(()=> { 

    const getData = async() => {
     
      const res = await BooksAPI.getAll();
          setData(res);
          // console.log(res);
        
        // setCurrentlyReading(data.filter((book) => book.shelf === "currentlyReading").map((book) => book))
      };
           getData();
     }, [data]); 

const updateBook =(book, shelf) => { 
  BooksAPI.update(book, shelf);
  };
    
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
          <BookShelf 
           data = {data}
           updateBook={updateBook}
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
