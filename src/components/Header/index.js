
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { IndexLink, Link } from 'react-router'

export default class Header extends Component{

  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
      <h1>React Redux Starter Kit</h1>
      <IndexLink to='/' activeClassName='route--active'>
        Home
      </IndexLink>
      {' · '}
      <Link to='/login' activeClassName='route--active'>
        login
      </Link>
    </div>
    )
  }
}

