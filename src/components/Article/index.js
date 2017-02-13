/**
 * Created by lilu on 2017/2/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Frame from '../Frame'


export default class Article extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Frame menuTitle='article'>
      <div>
        I'm Article
      </div>
        </Frame>
    )
  }
}