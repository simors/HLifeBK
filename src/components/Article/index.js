/**
 * Created by lilu on 2017/2/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



export default class Article extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        I'm Article
      </div>
    )
  }
}