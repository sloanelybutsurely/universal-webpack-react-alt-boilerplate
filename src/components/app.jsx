import React from 'react'

import TodoInput from './todo-input'
import TodoList from './todo-list'

const App = React.createClass({
  getInitialState() {
    return {
      clicks: 0
    }
  },

  render() {
    return (
      <div>
        <pre onClick={() => this.setState({clicks: this.state.clicks + 1})}>Clicks {this.state.clicks}</pre>
        <TodoInput />
        <TodoList />
      </div>
    )
  }
})

export default App
