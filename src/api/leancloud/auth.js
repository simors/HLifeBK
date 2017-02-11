/**
 * Created by lilu on 2017/2/11.
 */
import AV from 'leancloud-storage'
import {Map, List, Record} from 'immutable'


 export function getPermission (payload){
  console.log('payload===>',payload)
  return AV.Cloud.run('getPermissionListOnlyByLogin',payload).then((results)=>{
       let permissionList = List(results)
    return permissionList
  })
}
