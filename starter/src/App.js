import "./App.css";
import { useEffect, useState } from "react";
import Books from "./components/Books";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [shelf, setShelf] = useState([]);

  
  useEffect(()=> { 
    const getBooks = async() => {
      const res = await BooksAPI.getAll();
      setShelf(res);
      console.log(res);
    }
    getBooks();
  }, []);
  

  // useEffect(() => { 
    
  // })

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
          <Books shelf={shelf} 
              />
            {/* 
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}  
            read={read} 
            addBookToCurrentlyReading={() => addBookToCurrentlyReading(book) }
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
