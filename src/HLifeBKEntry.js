/**
 * Created by yangyang on 2017/2/8.
 */
import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import RouterWithRoutes from './routes'
import AV from 'leancloud-storage'
import * as LC_CONFIG from './constants/appConfig'
import {persistor, store} from './store/persistStore'
import Header from './components/Header'
import Frame from './components/Frame'

const KM_Dev = {
  appId: LC_CONFIG.LC_DEV_APP_ID,
  appKey: LC_CONFIG.LC_DEV_APP_KEY,
}

const KM_PRO = {
  appId: LC_CONFIG.LC_PRO_APP_ID,
  appKey: LC_CONFIG.LC_PRO_APP_KEY,
}

AV.init(
  __DEV__ ? KM_Dev : KM_PRO
)

class AppContainer extends Component {
  componentDidMount(){
    console.disableYellowBox = true
  }

  render() {
    return (
      <Provider store={store}>
        <div style={{flex: 1, flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
<Frame/>
          {/*<RouterWithRoutes />*/}
        </div>
      </Provider>
    )
  }
}

export default AppContainer
