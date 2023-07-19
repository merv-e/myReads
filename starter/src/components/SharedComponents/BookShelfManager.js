import React, {  useState } from 'react';

const BookShelfManager = ({ updateBook, shelf, title, book, id, getBook, data,  newSetOfBooks, handleChange }) => { 

  //which shelf the book is on the main page
  const [whichShelf , setWhichShelf] = useState(shelf);

  const handleSelection = (e) => {
    setWhichShelf(e.target.value);
    updateBook(book, e.target.value); 
    // getBook(id, e.target.value);
  };
  
  return (
    <div className="book-shelf-changer">
        <select
          value={whichShelf}
          id={id}
          name={title}
          onChange={ handleSelection } >
         <option value="moveTo" disabled >Move to...</option>
         <option value="currentlyReading">Currently Reading</option>
         <option value="wantToRead">Want to Read</option>
         <option value="read">Read</option>
         <option value="none" >None</option>
        </select>
    </div>
  )
}

export default BookShelfManager
