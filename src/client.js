import React from 'react'
import Router from 'react-router'

import routes from 'routes'

document.addEventListener('DOMContentLoaded', () => {
  Router.run(routes, (Handler) => {
    React.render(<Handler />, document.getElementById('app'))
  })
})
