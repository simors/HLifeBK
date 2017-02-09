import React, {Component} from 'react'
import {browserHistory, Router, Route} from 'react-router'
import HomePage from '../components/Home'
import Login from '../components/Login'

export default class RouterWithRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomePage}/>
        <Route path='/login' component={Login}/>
      </Router>
    )
  }
}
