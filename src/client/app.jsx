 /* 
*Powered by author vlift
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { middleware as thunkMiddleware } from 'redux-saga-thunk'
import IndexReducer from './reducers'
import IndexSagas from './sagas'
import TopbarContainer from './containers/Topbar/TopbarContainer'
import Sidebar from './components/Nav/Sidebar/index.jsx'
import ModalRoot from './containers/Modals'
import renderer from './renderer'

import $ from 'jquery'

const sagaMiddleware = createSagaMiddleware()

/*eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
/*eslint-enable */

// if (process.env.NODE_ENV !== 'production') {
localStorage.setItem('debug', 'cts:*') // Enable logger
// }

const preloadedState = {
  common: window.trudesk.__PRELOADED_STATE__
}

delete window.trudesk
$('script#preloader').remove()

const store = createStore(IndexReducer, preloadedState, composeSetup(applyMiddleware(thunkMiddleware, sagaMiddleware)))

// This is need to call an action from angular
// Goal: remove this once angular is fully removed
window.react.redux = { store }

sagaMiddleware.run(IndexSagas)

const sidebarWithProvider = (
  <Provider store={store}>
    <Sidebar />
  </Provider>
)

ReactDOM.render(sidebarWithProvider, document.getElementById('side-nav'))

if (document.getElementById('modal-wrapper')) {
  const RootModal = (
    <Provider store={store}>
      <ModalRoot />
    </Provider>
  )
  ReactDOM.render(RootModal, document.getElementById('modal-wrapper'))
}

if (document.getElementById('topbar')) {
  const TopbarRoot = (
    <Provider store={store}>
      <TopbarContainer />
    </Provider>
  )

  ReactDOM.render(TopbarRoot, document.getElementById('topbar'))
}

window.react.renderer = renderer
window.react.dom = ReactDOM

renderer(store)
