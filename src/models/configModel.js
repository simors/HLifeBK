/**
 * Created by yangyang on 2017/2/9.
 */
import {Map, List, Record} from 'immutable'

export const PrivilegeConfig = Record({
  addColumn: false,
  modifyColumn: false,
}, 'PrivilegeConfig')

export const BKConfig = Record({
  privilege: PrivilegeConfig(),
}, 'BKConfig')
