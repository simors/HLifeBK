/**
 * Created by lilu on 2017/2/9.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { IndexLink, Link } from 'react-router'
import Header from '../Header'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

export default class Login extends Component {
  constructor(props){
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
    // render(){
    //   const { getFieldDecorator } = this.props.form
    //   return (
    //     <Form onSubmit={this.handleSubmit} className="login-form">
    //       <FormItem>
    //         {getFieldDecorator('userName', {
    //           rules: [{ required: true, message: 'Please input your username!' }],
    //         })(
    //           <Input addonBefore={<Icon type="user" />} placeholder="Username" />
    //         )}
    //       </FormItem>
    //       <FormItem>
    //         {getFieldDecorator('password', {
    //           rules: [{ required: true, message: 'Please input your Password!' }],
    //         })(
    //           <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
    //         )}
    //       </FormItem>
    //       <FormItem>
    //         {getFieldDecorator('remember', {
    //           valuePropName: 'checked',
    //           initialValue: true,
    //         })(
    //           <Checkbox>Remember me</Checkbox>
    //         )}
    //         <a className="login-form-forgot">Forgot password</a>
    //         <Button type="primary" htmlType="submit" className="login-form-button">
    //           Log in
    //         </Button>
    //         Or <a>register now!</a>
    //       </FormItem>
    //     </Form>
    //   )
    // }
  render(){
    return(
      <div>
        <text>this is Login</text>
        <IndexLink to='/' activeClassName='route--active'>
          that is Home
        </IndexLink>
      </div>
    )
  }
}