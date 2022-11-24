import React from 'react'

const BookShelfManager = ({ addToCurReading }) => {
  return (
    <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading" onClick={() => addToCurReading()}> 
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>aa
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
    </div>
  )
}

export default BookShelfManager
