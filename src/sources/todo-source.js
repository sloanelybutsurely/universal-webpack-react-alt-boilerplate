import TodoActions from 'actions/todo-actions'
import axios from 'axios'

const TodoSource = {
  fetchTodos: {
    local(state) {
      return state.todos
    },

    remote(state) {
      console.log('source...', state)
      return axios.get('http://jsonplaceholder.typicode.com/todos')
    },

    success: TodoActions.todosLoaded,
    error: TodoActions.todoLoadFailed,
  },
}

export default TodoSource
