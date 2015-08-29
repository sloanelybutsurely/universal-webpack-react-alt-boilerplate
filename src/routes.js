import React from 'react'
import {Route, NotFoundRoute} from 'react-router'

const App = React.createClass({
  getInitialState() {
    return {
      clicks: 0
    }
  },

  render() {
    return (
      <pre onClick={() => this.setState({clicks: this.state.clicks + 1})}>
        Clicks: {this.state.clicks}
      </pre>
    )
  }
})

const NotFound = React.createClass({
  render() {
    return <pre>Not found</pre>
  }
})

const routes = [
  <Route path="/" handler={App} />,
  <NotFoundRoute handler={NotFound} />,
]

export default routes
