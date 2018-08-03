import React from 'react';
import BookshelfChanger from './BookshelfChanger'

function Book(props) {
  const imageLink = props.bookObject.imageLinks && props.bookObject.imageLinks.smallThumbnail
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLink})` }}></div>
        <BookshelfChanger
          shelf={props.bookObject.shelf}
        />
      </div>
      <div className="book-title">{props.bookObject.title}</div>
      <div className="book-authors">{props.bookObject.authors}</div>
    </div>
  )
}

export default Book;
