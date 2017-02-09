/**
 * Created by yangyang on 2017/2/9.
 */
import {combineReducers} from 'redux'
import configReducer from './configReducer'

const rootReducer = combineReducers({
  CONFIG: configReducer,
})

const rootReducerWrapper = (state, action) => {
  action.rootState = state
  if (action.error) {
    return {
      ...state,
    }
  } else {
    return rootReducer(state, action)
  }
}

export default rootReducerWrapper
