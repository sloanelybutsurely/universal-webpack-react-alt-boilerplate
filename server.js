import express from 'express'
import {Link} from 'react-router'
import React from 'react'
import Router from 'react-router'
import {Resolver} from 'react-resolver'

import routes from './src/routes'
import alt from './src/alt-instance'

const app = express()

app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.use((req, res) => {
  // react-router handler
  Router.run(routes, req.url, (Handler, state) => {

    Resolver.resolve(() => <Handler {...state} />)
            .then(({Resolved, data}) => {
              // React renders the component
              const content = React.renderToString(<Resolved />)
              const __alt_data = alt.flush()


              // Make sure the right header is set when we hit <NotFoundRoute />
              if (state.routes[0].isNotFound) res.status(404)

              // Use ejs template (./views/index.ejs)
              res.render('index', {
                content: content,
                __alt_data: __alt_data,
                __react_resolver_data: data
              })

              // Very minimal logging
              console.log(`react server render: ${req.method} -- ${req.url}`)
            })
  })
})

app.get('/', (req, res) => {
  res.send('hello, world')
})

const server = app.listen(process.env.PORT || 3000, () => {
  const [host, port] = [server.address().address, server.address().port]
  console.log(`Server listening on http://${host}:${port}`)
})
