import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import fetch from 'isomorphic-fetch'
import serialize from 'serialize-javascript'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  const markup = renderToString(<App />)
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {

      res.send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>React SSR</title>
              <script src="/bundle.js" defer></script>
              <script>window.__INITIAL_DATA__ = ${serialize(json)}</script>
              <link rel="stylesheet" type="text/css" href="/theme.css" />
              <link rel="stylesheet" type="text/css" href="/styles.css" />
            </head>

            <body>
              <div id="root">
                ${markup}
              </div>
            </body>
          </html>
        `)
    })
    .catch(err => {
      res.send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>React SSR</title>
              <script src="/bundle.js" defer></script>
              <script>window.__INITIAL_DATA__ = [])}</script>
              <link rel="stylesheet" type="text/css" href="/theme.css" />
              <link rel="stylesheet" type="text/css" href="/styles.css" />
            </head>

            <body>
              <div id="root">
                ${markup}
              </div>
            </body>
          </html>
        `)
    })

})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
