import "./App.css";
import { useEffect, useState } from "react";
import Books from "./components/Books";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const {shelf, setShelf} = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  
  useEffect(()=> { 
    const getBooks = async() => {
      const res = await BooksAPI.getAll();
      setShelf(res);
      console.log(res);
    }
    getBooks();
  }, [setShelf]);
  

  return (
    <div className="app">
     {/* Child */}
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
          <Books currentlyReading={currentlyReading} 
              />
            {/* addBookToCurrentlyReading={() => addBookToCurrentlyReading(book) }
            
            wantToRead={wantToRead}  
            read={read} 
            addBookToWantToRead= {addBookToWantToRead}
            addBookToRead={addBookToRead} 
            onAddBook={addBookToAShelf} */}

          <div className="open-search">    
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
