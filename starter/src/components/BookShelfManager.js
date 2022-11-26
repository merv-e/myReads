import React, { useState } from 'react'

const BookShelfManager = ({ shelf }) => { 
    
  const [selectedShelf, setSelectedShelf] = useState(shelf);

  const changeShelf = (ev) => {
    setSelectedShelf(ev.target.value);
    
  };

  return (
    <div className="book-shelf-changer">
        <select
          value={selectedShelf}
          onChange={changeShelf}>
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
