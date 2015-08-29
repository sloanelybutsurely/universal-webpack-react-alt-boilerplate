import React from 'react'
import {Route, NotFoundRoute} from 'react-router'

import App from './components/app'


const Test = React.createClass({
  render() {
    return <pre>Moar stuffs...</pre>
  }
})

const NotFound = React.createClass({
  render() {
    return <pre>Not found</pre>
  }
})

const routes = [
  <Route path="/" handler={App} />,
  <Route name="test" handler={Test} />,
  <NotFoundRoute handler={NotFound} />,
]

export default routes
