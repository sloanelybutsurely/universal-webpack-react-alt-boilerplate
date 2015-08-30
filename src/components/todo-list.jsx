import React, {Component} from 'react'
import connect from 'utils/connect'

import TodoStore from 'stores/todo-store'


@connect
export default class TodoList extends Component {
  constructor(props, context) {
    super(props, context)
    this.renderTodos = this.renderTodos.bind(this)
  }

  static resolveProps(props, context) {
    return {
      todos: TodoStore.fetchTodos()
    }
  }

  static listenTo() {
    return [TodoStore]
  }

  renderTodos() {
    if (!this.props.todos) return
    return this.props.todos.map((todo) => <pre key={todo.id}>{todo.title}</pre>)
  }

  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}
