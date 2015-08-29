import alt from 'alt-instance'

class TodoActions {
  constructor() {
    this.generateActions(
      'todosLoaded',
      'todoLoadFailed'
    )
  }
}

export default alt.createActions(TodoActions)
