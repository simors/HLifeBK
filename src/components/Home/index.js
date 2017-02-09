/**
 * Created by yangyang on 2017/2/9.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setPrivilege} from '../../actions/configActions'

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
