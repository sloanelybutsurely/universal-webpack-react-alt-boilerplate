import React from 'react'
import Router, {HistoryLocation} from 'react-router'
import {Resolver} from 'react-resolver'


import routes from 'routes'
import alt from 'alt-instance'

if (window.__ALT_BOOTSTRAP_PAYLOAD__) {
  alt.bootstrap(window.__ALT_BOOTSTRAP_PAYLOAD__)
  delete window['__ALT_BOOTSTRAP_PAYLOAD__']
}

Router.run(routes, HistoryLocation, (Root) => {
  Resolver.render(() => <Root />, document.getElementById('app'))
})
