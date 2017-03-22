import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import Main from 'Main'
import Home from 'Home'
import About from 'About'

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

require('./styles/app.scss')

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/react-redux-ghpages-boilerplate" component={Main}>
        <Route path="about" component={About} />
        <IndexRoute component={Home} />
      </Route>
    </Router> 
  </Provider>,
  document.getElementById('app')
)