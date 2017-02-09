import React, {Component} from 'react'
import {browserHistory, Router, Route} from 'react-router'
import HomePage from '../components/Home'

export default class RouterWithRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomePage}/>
      </Router>
    )
  }
}
