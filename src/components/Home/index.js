/**
 * Created by yangyang on 2017/2/9.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setPrivilege} from '../../actions/configActions'
import { IndexLink, Link } from 'react-router'
import Header from '../Header'
import {Layout,Sider,Button} from 'antd'
import 'antd/dist/antd.css'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  privilege() {
    this.props.setPrivilege({})
  }

  render() {
    return (
      <div>

        <Header/>

        <Link to='/login' activeClassName='route--active'>
          login
        </Link>
          <Button type="dashed"  onClick={() => this.privilege()}>Search</Button>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  let newProps = {}
  return newProps
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setPrivilege,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
