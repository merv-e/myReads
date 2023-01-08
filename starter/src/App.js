import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";
import Library from "./components/Library";

const App = () => {

  // data comes with the API call will be stored here for the main page
  const [data, setData] = useState([]); 
     
  const getData = async () => {
    const res = await BooksAPI.getAll();
     setData(res);
    };
  
  useEffect(()=> { 
    // eger bookshelf managerdaki veri degisiyorsa... getData'yi cagir.
  //  if(load) 
     getData();
    }, [data]); //
    // console.log(data);     

    //data'yi dependency arr eklemezsek surekli render etmiyor. ancak cikarirsak da bu sefer kitap rafını değiştirdiğimizde anlık işlem yapmıyor ! :/ 
    
    
   // book and shelf information will be transfered from child components which are BookShelf and SearchBooks.   
   const updateBook = (book, shelf) => { 
    BooksAPI.update(book, shelf);
    // getData();
  };
  

  //  bookId and shelf information will be transfered from child components.
  const getBook = (bookId, shelf) => {
    const res=  BooksAPI.get(bookId); 
    // this call is made, so that after user searchs a book and is chosen to be on any shelf, it'll also update the book in backend.
    updateBook(res, shelf);
};
  
    return (
      <div className="app">
        <Routes>
          <Route 
          exact path="/"
          element={
            <Library 
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
              getBook={getBook}
              getData={getData}
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