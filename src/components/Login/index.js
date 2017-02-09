/**
 * Created by lilu on 2017/2/9.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { IndexLink, Link } from 'react-router'
import Header from '../Header'


export default class Login extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Header/>

        <text>this is Login</text>
        <IndexLink to='/' activeClassName='route--active'>
          that is Home
        </IndexLink>
      </div>
    )
  }
}