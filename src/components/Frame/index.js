/**
 * Created by lilu on 2017/2/10.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { IndexLink, Link } from 'react-router'
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
import 'antd/dist/antd.css'
import './frame.scss'
import Home from '../Home'
import Article from '../Article'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const menuList = {
  backgroundManager:['资金管理','人员管理'],
  doctorManager:['医生审核'],
  shopManager:['店铺审核','店铺关闭','店铺开张'],
  articleManager:['文章失效','栏目管理','文章更新','文章发布',],
  topicManager:['话题发布','话题更新','精选加工'],
  activity:['活动新建','活动关闭','活动设计','活动开启',],
}

export default class Frame extends Component{
  constructor(props){
    super(props)
    this.state={
      menuIndex:0

    }
  }
  chooseMenu (index){
    this.setState({
      menuIndex: index
    })
  }
  renderContent(){
    if(this.state.menuIndex == 0) {
      return (
        <Home></Home>
      )
    }
    if(this.state.menuIndex == 1) {
      return (
        <Article/>
      )
    }
  }
//




  render(){
    return(
      <Layout>
        <Header className="header" style={{flex:1,flexDirection:'row'}}>
          <div className="logo" ></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to='/login' activeClassName='route--active'>
                toLogin
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Button onClick={()=>this.chooseMenu(1)}>文章管理</Button>
            </Menu.Item>
            <Menu.Item key="3">我还没什么用</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>

          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                  <Menu.Item key="1" o>
                    <div onClick={()=>this.chooseMenu(0)}>Home</div>
                  </Menu.Item>
                  <Menu.Item key="2" >
                    <div onClick={()=>this.chooseMenu(1)}>文章管理</div>
                  </Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {this.renderContent()}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Design ©2017 Created by Simor Technology
        </Footer>
      </Layout>
    )
  }
}