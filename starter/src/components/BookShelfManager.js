import React, { useState } from 'react'

const BookShelfManager = ({ shelf }) => { 
    
  const [selectedValue, setSelectedValue] = useState({shelf});

  return (
    <div className="book-shelf-changer">
        <select
          value={shelf}
          onChange={(ev) => setSelectedValue(ev.target.value)}>
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
