import "./App.css";
import { useCallback, useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";

const App = () => {

  // data comes with the API call will be stored here for the main page
  const [data, setData] = useState([]);    

  
  useEffect((query, numberOfResults)=> { 
    const getData = async () => {
      const res = await BooksAPI.getAll();
       setData(res);
    };
    // eger bookshelf managerdaki veri degisiyorsa... getData'yi cagir.
  //  if(load) 
     getData();
    }, [data]);    

    //data'yi dependency arr eklemezsek surekli render etmiyor. ancak cikarirsak da bu sefer kitap rafını değiştirdiğimizde anlık işlem yapmıyor ! :/ 
    
    // const searchingBooks = callForSearch();
    
   // book and shelf information will be transfered from child components which are BookShelf and SearchBooks.
   const updateBook = (book, shelf) => { 
    BooksAPI.update(book, shelf);
  };
  

  //  bookId and shelf information will be transfered from child components.
  const getBook = (bookId, shelf) => {
    //async ve await silindi.
    const res=  BooksAPI.get(bookId); 
    // this call is made, so that after user searchs a book and is chosen to be on any shelf, it'll also update the book in backend.
    updateBook(res, shelf);
  // };
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
              // onSearch={ searchingBooks} 
              // onSearch={(query,numberOfResults) => searchingBooks(query, numberOfResults)} 
              // newSetOfBooks={newSetOfBooks}
            />
          }
          />  

        </Routes>   
      </div>
    );
}

export default App;

// get Book async ve await silince console.log'da aldığım hataları artık almıyorum. 

//getBook hicbir yerde cagrilmiyor.