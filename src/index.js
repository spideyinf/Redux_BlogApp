import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Route, BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

import PostsIndex from './components/PostsIndex';

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const createStoreWithMiddleware = applyMiddleware(promise)(finalCreateStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
