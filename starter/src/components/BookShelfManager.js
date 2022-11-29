import React, { useState } from 'react';
const BookShelfManager = ({ updateBook, shelf, name, theBook, id, getBook, data}) => { 
  
  //if book is in the search page 
  //if book is in the main page
  //if book is in the search and also in main page 

  //which shelf the book is on the main page
  const [whichShelf , setWhichShelf] = useState(shelf);

  //which shelf the book is on the search page
  const [whichShelfSearchPg, setWhichShelfSearchPg] = useState("");

  const handleSelection = (e) => {
    setWhichShelf(e.target.value);
    updateBook(theBook, e.target.value); 
    // getBook(id, e.target.value);
  };
  // It's only related to the value of the book.
  // const whereIsTheBook = 


  return (
    <div className="book-shelf-changer">
        <select
          value={whichShelf}
          name={name}
          onChange={ handleSelection } >
         <option value="none" disabled >Move to...</option>
         <option value="currentlyReading">Currently Reading</option>
         <option value="wantToRead">Want to Read</option>
         <option value="read">Read</option>
         <option value="none" >None</option>
        </select>
    </div>
  )
}

export default BookShelfManager
