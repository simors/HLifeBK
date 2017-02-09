// import {LocalStorage} from 'react-native-web'
import {persistStore} from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import createFilter from 'redux-persist-transform-filter'
import configureStore from './configureStore'

const messageFilter = createFilter(
  'MESSAGE',
  [
    'activeConversation',
    'msgById',
    'convById',
    'convListSortedByUpdatedTime',
    'unreadCount'
  ]
)

export default function persist(store) {
  persistStore(store, {
    // storage: localStorage,
    transform: [
      immutableTransform({
        records: [
        ],
      }),
    ],
    transforms: [messageFilter],
    whitelist: ['CONFIG'],
  }, ()=> {
    // store.dispatch(restoreFromPersistence())
  })
}

// export function restoreFromPersistence() {
//   return (dispatch, getState) => {
//     if (authSelectors.isUserLogined(getState())) {
//       dispatch(verifyToken())
//       insertActiveUser({
//         userId: authSelectors.activeUserId(getState()),
//         platform: 'web',
//       })
//     } else {
//       try {
//       } catch (e) {
//         console.log("restoreFromPersistence error is", e)
//       }
//     }
//   }
// }
//
// function verifyToken() {
//   return (dispatch, getState) => {
//     let payload = {
//       ...authSelectors.activeUserAndToken(getState())
//     }
//
//     become(payload).then(() => {
//       return dispatch(initMessenger())
//     }).then(() => {
//       // Actions.HOME()
//     }).catch((error) => {
//       console.log('verify token error:', error)
//     })
//   }
// }

export const store = configureStore()
export const persistor = persist(store)
