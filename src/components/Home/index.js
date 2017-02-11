/**
 * Created by yangyang on 2017/2/9.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setPrivilege} from '../../actions/configActions'
import { IndexLink, Link } from 'react-router'
import Header from '../Header'
import {Layout,Menu,Breadcrumb,Button} from 'antd'
import 'antd/dist/antd.css'
import {getPrivilege} from '../../selectors/configSelector'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.setPrivilege({phone:'13974837930',password:'13974837930'})
  }

  privilege() {
    this.props.setPrivilege({})
  }
  rendHome(){
    return(
      <div>hahahahahahaha</div>
    )
  }
  render() {
    return (
      <div>I'm Home</div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const menuList=getPrivilege(state)
  console.log('menuList==>',menuList)
  return {
    menuList:menuList
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setPrivilege,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
