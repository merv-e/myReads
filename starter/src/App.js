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
     }, [data]); 

    const updateBook =(book, shelf) => { 
      BooksAPI.update(book, shelf);
    };
    
    return (
      <div className="app">
        <Routes>
          <Route 
          exact path="/"
          element={
            <BookShelf 
              data = {data}
              updateBook={updateBook}
            />        
          }
          />
          
          <Route 
          path="/search"
          element = {
            <SearchBooks 
              data = {data}
              updateBook={updateBook}         />
          }
          />  

        </Routes>   
      </div>
    );
}

export default App;
