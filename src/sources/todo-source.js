import TodoActions from '../actions/todo-actions'
import api from '../utils/api-dummy'

const TodoSource = {
  local(state) {
    return null
  },

  remote(state) {
    return api.getTodos()
  },

  success: TodoActions.todosLoaded,
  error: TodoActions.todoLoadFailed,
}

export default TodoSource
