import React, {addons} from 'react/addons'
import alt from 'alt-instance'
import fetch from 'utils/fetch'
import TodoActions from 'actions/todo-actions'
import {fetchTodos} from 'sources/todo-source'

class TodoStore {
  constructor() {
    this.state = {
      todos: null
    }
    this.bindActions(TodoActions)
    this.exportPublicMethods({
      fetchTodos: this.fetchTodos,
    })
  }

  onTodosLoaded({response: {data}}) {
    this.setState({todos: data})
  }

  fetchTodos() {
    return fetch(this, fetchTodos)
  }
}

export default alt.createStore(TodoStore, 'TodoStore')
