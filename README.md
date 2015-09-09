### Universal React+Flux with `react-resolver`



#### Getting started
Just clone or fork and get to work!
```bash
$ git clone https://github.com/zperrault/universal-webpack-react-alt-boilerplate.git my-cool-project
$ cd my-cool-project
$ rm -rf .git
$ nvm use
$ npm install
$ npm run dev
```
It is also a good idea to change the package information in the `package.json` file.

#### Directory layout

```
LICENSE                         # The MIT license file
README.md                       # The document you're reading right now
server.config.js                # Server webpack configuration
client.config.js                # Client webpack configuration
package.json                    # Listing of dependancies
dist/                           # Where webpack outputs the server build
  ├── server-build.js
  └── server-build.js.map
node_modules/                   # third-party libraries
public/                         # Where static files should be placed
  └── bundle.js                 # The client side build file
src/
  ├── alt-instance.js           # The Alt singleton used in both client and server renders
  ├── client.js                 # The client entry
  ├── routes.js                 # Routes used by both client and server (react-router)
  ├── server.js                 # the server entry
  ├── actions/                  # Alt actions
  │   └── todo-actions.js
  ├── components/               # All React components
  │   ├── app.jsx
  │   └── todo-list.jsx
  ├── stores/                   # Alt stores
  │   └── todo-store.js
  └── utils/
      ├── connect.js            # Wrapper component to use with react-resolver
      └── fetch.js              # Use in place of traditional Alt Data Sources
views
  └── index.ejs                 # The view template

```

#### TODO

- [ ] Merge duplicate webpack config options
- [ ] Document fetch and connect
- [ ] Document `npm run` scripts
- [ ] rename project... 'universal-webpack-react-alt-boilerplate' is a mouthful
- [x] ~~Create production builds~~
- [ ] Yeoman generator?
