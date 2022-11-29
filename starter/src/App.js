import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";


const App = () => {

  const [data, setData] = useState([]);    
  const [newSetOfBooks, setNewSetOfBooks] = useState([]);

    const updateBook = (book, shelf) => { 
      BooksAPI.update(book, shelf);
    };

    const getBook = (bookId, shelf) => {
    const grabBook = async () => {
    const res= await BooksAPI.get(bookId);
    updateBook(res, shelf);
    console.log(res);
    console.log(shelf);
    };
    // grabBook();
  };
  
  const searchingBooks = (query, numberOfResults) => {
    const search = async () => { 
      const result =  await BooksAPI.search(query, numberOfResults);
        setNewSetOfBooks(result);
        console.log(newSetOfBooks);
        // console.log(result);
      };
      search();
    };
    
    useEffect(()=> { 
      const getData = async() => {
        const res = await BooksAPI.getAll();
        setData(res);
        // console.log(res);
      };
      getData();
    
    // }
  }, [data]); // 
    
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
