import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from "./BooksAPI";
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {
  static propTypes={
    bookObject: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      bookObject: props.bookObject,
      moveBook: props.moveBook
    }
  }
  componentDidMount() {
    const bookId = this.state.bookObject.id
    BooksAPI.get(bookId)
      .then(resp => this.setState(prevState => ({
        bookObject: {
          ...prevState.bookObject,
          shelf: resp.shelf
        }
      })))
  }
  // moveBook = (shelf) => {
  //   this.setState(prevState => ({
  //     bookObject: {
  //       ...prevState.bookObject,
  //       shelf: shelf
  //     }
  //   }))
  // }
  render() {
    const imageLink = this.state.bookObject.imageLinks && this.state.bookObject.imageLinks.smallThumbnail
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLink})` }}></div>
          <BookshelfChanger
            moveBook={(event) => this.state.moveBook(this.state.bookObject, event.target.value)}
            shelf={this.state.bookObject.shelf}
          />


        </div>
        <div className="book-title">{this.state.bookObject.title}</div>
        <div className="book-authors">{this.state.bookObject.authors}</div>
      </div>
    )
  }
}

export default Book;
