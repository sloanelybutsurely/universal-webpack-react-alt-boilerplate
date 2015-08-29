import React from 'react'
import {Link} from 'react-router'

const App = React.createClass({
  getInitialState() {
    return {
      clicks: 0
    }
  },

  render() {
    return (
      <div>
        <pre onClick={() => this.setState({clicks: this.state.clicks + 1})}>
          Clicks: {this.state.clicks}
        </pre>
      </div>
    )
  }
})

export default App
