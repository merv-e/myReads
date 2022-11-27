import React, { useState } from 'react';

const BookShelfManager = ({ updateBook, shelf, name, theBook}) => { 

  const [whichShelf , setWhichShelf] = useState(shelf);

  const handleSelection = (e) => {
    setWhichShelf(e.target.value);
    updateBook(theBook, e.target.value);
  }

  return (
    <div className="book-shelf-changer">
        <select
          name={name}
          value={whichShelf}
          onChange={handleSelection}
          >
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
