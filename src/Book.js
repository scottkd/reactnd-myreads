import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes={
    bookObject: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      bookObject: props.bookObject,
    }
  }
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.state.bookObject.imageLinks.smallThumbnail})` }}></div>

          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.state.bookObject.title}</div>
        <div className="book-authors">{this.state.bookObject.authors}</div>
      </div>
    )
  }
}

export default Book;
