import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";


const App = () => {

  // data comes with the API call will be stored here for the main page
  const [data, setData] = useState([]);    

  // data comes with the API call will be stored here for the search page
  const [newSetOfBooks, setNewSetOfBooks] = useState([]);

  // book and shelf information will be transfered from child components which are BookShelf and SearchBooks.
    const updateBook = (book, shelf) => { 
      BooksAPI.update(book, shelf);
    };
    
    // when the user navigates to the search page and types a title it'll show the relevant books.
    const searchingBooks = (query, numberOfResults) => {
      const search = async () => { 
        const result =  await BooksAPI.search(query, numberOfResults);
          setNewSetOfBooks(result);
          console.log(newSetOfBooks);
          // console.log(result);
        };
        search();
      };

    //  bookId and shelf information will be transfered from child components.
    const getBook = (bookId, shelf) => {
      const grabBook = async () => {
      const res= await BooksAPI.get(bookId);
      // this call is made, so that after user searchs a book and is chosen to be on any shelf, it'll also update the book in backend.
      updateBook(res, shelf);
    };
  };
  
  // cleanup must be added. Because the page re-renders continuously particularly with the getAll() and search() API calls.  
    useEffect(()=> { 
      const getData = async() => {
        const res = await BooksAPI.getAll();
        setData(res);
      };
      getData();
  }, [data]); 
    
    return (
      <div className="app">
        <Routes>
          <Route 
          exact path="/"
          element={
            <BookShelf 
              data = {data}
              updateBook={updateBook}
              getBook={getBook}
            />        
          }
          />
          
          <Route 
          path="/search"
          element = {
            <SearchBooks 
              data = {data}
              updateBook={updateBook}
              onSearch={(query,numberOfResults) => searchingBooks(query, numberOfResults)} 
              newSetOfBooks={newSetOfBooks}
            />
          }
          />  

        </Routes>   
      </div>
    );
}

export default App;
