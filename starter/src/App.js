import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";


const App = () => {

  const [data, setData] = useState([]);    

  useEffect(()=> { 
    const getData = async() => {
      const res = await BooksAPI.getAll();
          setData(res);
          // console.log(res);
      };
       getData();
     }, [data]); // 

    const updateBook = (book, shelf) => { 
      BooksAPI.update(book, shelf);
    };

    const [newSetOfBooks, setNewSetOfBooks] = useState([]);

    const searchingBooks = (query, numberOfResults) => {
    const search = async () => { 
      const result =  await BooksAPI.search(query, numberOfResults);
      setNewSetOfBooks(result);
      console.log(newSetOfBooks);
      console.log(result);
    };
    search();
  };

  // const getBooks = async (bookId) => {
  //   await BooksAPI.get(bookId)
  //   console.log(getBooks);
  // };
  // getBooks();
  
    
    return (
      <div className="app">
        <Routes>
          <Route 
          exact path="/"
          element={
            <BookShelf 
              data = {data}
              updateBook={updateBook}
              // getBooks={getBooks}
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
