import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

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
    BooksAPI.update(bookToMove, shelf).then(() => {
      bookToMove.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== bookToMove.id).concat(bookToMove)
      }))
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks
            moveBook={this.moveBook}
            books={this.state.books}
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
