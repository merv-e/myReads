import React, { useState } from 'react'

const BookShelfManager = ({ key, name, id }) => { 

  const defaultValues = [
        "Currently Reading", 
        "Want To Read", 
        "Read",
        "None"];
    
  const [selectedValue, setSelectedValue] = useState(defaultValues[0]);

  return (
    <div className="book-shelf-changer">
        <select
          id= {id}
          name={name} 
          value={selectedValue}
          onChange={(ev) => setSelectedValue(ev.target.value) }>
          {
          defaultValues.map((value) => (
          <option value={value} key={value}> {value} </option>
        ))}
        </select>
    </div>
  )
}

export default BookShelfManager
