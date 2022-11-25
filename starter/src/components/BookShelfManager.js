import React, { useState } from 'react'

const BookShelfManager = ({ addToCurReading, values, handleSelection }) => { 

  return (
    <div className="book-shelf-changer">
        <select 
          value={values}
         
          onChange={handleSelection} >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading"   > 
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none" >None</option>
        </select>
    </div>
  )
}

export default BookShelfManager
