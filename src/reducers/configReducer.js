/**
 * Created by yangyang on 2017/2/9.
 */
import {Map, List} from 'immutable'
import {REHYDRATE} from 'redux-persist/constants'
import * as configActionTypes from '../constants/configActionTypes'
import {BKConfig, PrivilegeConfig} from '../models/configModel'

const initialState = new BKConfig()

export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case configActionTypes.SET_PRIVILEGE:
      return setPrivilege(state, action)
    case REHYDRATE:
      return onRehydrate(state, action)
    default:
      return state
  }
}

function setPrivilege(state, action) {
  //let privilege = new PrivilegeConfig({modifyColumn: true})
  let payload = action.payload
  state = state.set('privilege', payload)
  return state
}

function onRehydrate(state, action) {
  var incoming = action.payload.CONFIG
  if (!incoming) return state

  return state
}
