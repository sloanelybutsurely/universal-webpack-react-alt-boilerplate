import React from 'react'
import Router, {HistoryLocation} from 'react-router'

import routes from 'routes'

Router.run(routes, HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById('app'))
})
