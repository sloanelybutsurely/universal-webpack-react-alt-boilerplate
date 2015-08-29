import express from 'express'
import React from 'react'
import Router from 'react-router'

import routes from './routes'

const app = express()

app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.use((req, res) => {
  // react-router handler
  Router.run(routes, req.url, (Handler, state) => {
    // React renders the component
    const content = React.renderToString(<Handler />)

    // Make sure the right header is set when we hit <NotFoundRoute />
    if (state.routes[0].isNotFound) res.status(404)

    // Use ejs template (./views/index.ejs)
    res.render('index', {content: content})

    // Very minimal logging
    console.log(`react server render: ${req.method} -- ${req.url}`)
  })
})

app.get('/', (req, res) => {
  res.send('hello, world')
})

const server = app.listen(process.env.PORT || 3000, () => {
  const [host, port] = [server.address().address, server.address().port]
  console.log(`Server listening on http://${host}:${port}`)
})
