import alt from 'alt-instance'

class TodoActions {
  constructor() {
    this.generateActions(
      'todosLoaded',
      'todoLoaded',
      'todoLoadFailed'
    )
  }
}

export default alt.createActions(TodoActions)
