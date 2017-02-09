import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { enableBatching } from 'redux-batched-actions'

import createLogger from 'redux-logger'
const logger = createLogger({predicate: (getState, action) => __DEV__})

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, logger]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    enableBatching(rootReducer),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  return store
}
