import React from 'react'
import Router, {HistoryLocation} from 'react-router'
import {Resolver} from 'react-resolver'


import routes from 'routes'
import alt from 'alt-instance'

if (window.__alt_data) alt.bootstrap(window.__alt_data)

Router.run(routes, HistoryLocation, (Root) => {
  Resolver.render(() => <Root />, document.getElementById('app'))
})
