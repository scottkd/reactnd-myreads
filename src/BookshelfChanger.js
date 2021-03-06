import React from 'react'

function BookshelfChanger(props) {
  return(
    <div className="book-shelf-changer">
      <select value={props.bookObject.shelf || 'none'} onChange={(event) => props.moveBook(props.bookObject, event)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookshelfChanger;
