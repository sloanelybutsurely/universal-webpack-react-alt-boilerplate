import React, {Component} from 'react'
import connect from 'utils/connect'

import TodoStore from 'stores/todo-store'


@connect
export default class TodoList extends Component {
  constructor(props, context) {
    super(props, context)
    this.renderTodos = this.renderTodos.bind(this)
  }

  static resolveProps() {
    return {
      todos: TodoStore.fetchTodos()
    }
  }

  static listenTo() {
    return [TodoStore]
  }

  renderTodos() {
    if (!this.props.todos) return
    return Object.keys(this.props.todos).map((id) => <pre key={id}>{this.props.todos[id].text}</pre>)
  }

  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}
