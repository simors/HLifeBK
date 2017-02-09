/**
 * Created by yangyang on 2017/2/9.
 */
import {List, Map} from 'immutable'

export function getPrivilege(state) {
  let privilege = state.CONFIG.privilege
  return privilege
}
