import React, {addons} from 'react/addons'
import axios from 'axios'
import alt from 'alt-instance'
import fetch from 'utils/fetch'
import TodoActions from 'actions/todo-actions'

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

  onTodosLoaded(todos) {
    this.setState({todos})
  }

  fetchTodos() {
    return fetch(this, {
      local(state) {
        return state.todos
      },

      remote(state) {
        return axios.get('http://jsonplaceholder.typicode.com/todos')
                    .then((resp) => resp.data)
      },

      success: TodoActions.todosLoaded,
      failure: TodoActions.todoLoadFailed,
    })
  }
}

export default alt.createStore(TodoStore, 'TodoStore')
