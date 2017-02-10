
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { IndexLink, Link } from 'react-router'
import {Layout,Menu,Breadcrumb,Icon} from 'antd'
import 'antd/dist/antd.css'
const {Content,Footer,Sider} = Layout
export default class Header extends Component{

  constructor(props) {
    super(props)
    this.state ={
      collapsed:false
    }
  }

  onCollapse = (collapsed)=>{
    console.log(collapsed);
   // this.setState({collapsed:true})
  }

  render(){
    return(
      <Layout>
        <Sider
          collapsible
          collapsed = {this.state.collapsed}
          onCollapse = {this.onCollapse()}
        >
          <Menu theme = "dark" mode = "inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user"/>
              <Link to='/login' activeClassName='route--active'>
                login
              </Link>
              </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <Link to='/' activeClassName='route--active'>
                login
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
            {this.props.child}
        </Content>
      </Layout>
    )
  }
}

