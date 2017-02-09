/**
 * Created by yangyang on 2017/2/9.
 */
import {createAction} from 'redux-actions'
import * as configActionTypes from '../constants/configActionTypes'

export const onSetPrivilege = createAction(configActionTypes.SET_PRIVILEGE)

export function setPrivilege(payload) {
  return (dispatch, getState) => {
    dispatch(onSetPrivilege(payload))
  }
}
