import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import reducers from './reducers'
import promise from 'redux-promise'

import PostsIndex from './components/PostsIndex'
import PostsNew from './components/PostsNew'

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)

const createStoreWithMiddleware = applyMiddleware(promise)(
  finalCreateStore,
)

const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'),
)
