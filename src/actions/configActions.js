/**
 * Created by yangyang on 2017/2/9.
 */
import * as lcAuth from '../api/leancloud/auth'
import {createAction} from 'redux-actions'
import * as configActionTypes from '../constants/configActionTypes'

export const onSetPrivilege = createAction(configActionTypes.SET_PRIVILEGE)

export function setPrivilege(payload) {
  return (dispatch, getState) => {
    lcAuth.getPermission(payload).then((results)=>{
      dispatch(onSetPrivilege(results))

    }).catch((error) => {
      if(payload.error) {
        payload.error(error)
      }
    })
  }
}
