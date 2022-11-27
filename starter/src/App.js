import "./App.css";
import { useEffect, useState } from "react";
import BookShelf from "./components/BookShelf";
import * as BooksAPI from "./BooksAPI";


const App = () => {

  const [showSearchPage, setShowSearchpage] = useState(false);

    const [data, setData] = useState([]);   

  
   const [currentlyReading, setCurrentlyReading] = useState([]);

  const [wantToRead, setWantToRead] = useState(data.filter((book) => book.shelf === "wantToRead").map((book) => book));
  
  const [read, setRead] = useState(data.filter((book) => book.shelf === "read").map((book) => book));

  const [notDisplayedInShelf, setNotDisplayedInShelf] = useState([]);
  
  useEffect(()=> { 
    const getData = async() => {
      const res = await BooksAPI.getAll();
      setData(res);
      // setCurrentlyReading(data.filter((book) => book.shelf === "currentlyReading").map((book) => book))
  //        console.log(res);
       };
       getData();
  // return eklememiz lazım yoksa devam ediyor.

     }, [data]);
   

const updateBook =(book, shelf) => { 
  BooksAPI.update(book, shelf);
      
    if (shelf === "currentlyReading") setCurrentlyReading(currentlyReading.concat(book))
    else if (shelf === "wantToRead") setWantToRead([...wantToRead, book])
    else if (shelf === "read") setRead([...read, book])
    else setNotDisplayedInShelf([...notDisplayedInShelf, book]);
  };
    
    console.log(currentlyReading);
    // console.log(read);
    // console.log(wantToRead);
    // console.log(notDisplayedInShelf);
    
    

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
