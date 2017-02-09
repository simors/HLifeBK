/**
 * Created by yangyang on 2017/2/9.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setPrivilege} from '../../actions/configActions'
import { IndexLink, Link } from 'react-router'
import Header from '../Header'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  privilege() {
    this.props.setPrivilege({})
  }

  render() {
    return (
      <div onClick={() => this.privilege()}>
        <Header/>

        <Link to='/login' activeClassName='route--active'>
          login
        </Link>
        Hello!
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
