import React from 'react'

import TodoList from 'components/todo-list'

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
        <TodoList />
      </div>
    )
  }
})

export default App
