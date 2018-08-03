import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  moveBook = (bookToMove, event) => {
    const shelf = event.target.value
    const movedBook = Object.assign(bookToMove, {shelf: shelf})
    const index = this.state.books.findIndex(book=> book.id === bookToMove.id)
    if (index === -1) {
      this.setState({
        books: [
          ...this.state.books,
          movedBook
        ]
      })
    }
    else {
      this.setState({
        books: [
          ...this.state.books.slice(0, index),
          movedBook,
          ...this.state.books.slice(index + 1)
        ]
      })
    }
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks
            moveBook={this.moveBook}
          />
        )} />
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
