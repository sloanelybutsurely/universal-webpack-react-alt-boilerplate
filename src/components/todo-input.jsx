import React, {Component} from 'react'

export default class TodoInput extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const todoText = React.findDOMNode(this.refs.todoText).value
    React.findDOMNode(this.refs.todoText).value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="todoText" />
      </form>
    )
  }
}
