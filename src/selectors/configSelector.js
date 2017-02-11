/**
 * Created by yangyang on 2017/2/9.
 */
import {List, Record,Map} from 'immutable'

export function getConfig(state){
  console.log('here')
  return state.CONFIG
}
export function getPrivilege(state) {

  let privilege = getConfig(state).privilege|| []
  return privilege.toJS()
}
