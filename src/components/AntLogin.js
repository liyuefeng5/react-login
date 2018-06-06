import React, { Component } from 'react';
import '../css/all.css'
import '../https.js'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
const FormItem = Form.Item;
class NormalLoginForm extends Component {
	constructor(props) {
		super(props)
		this.state={}
	}
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
				console.log('Received values of form: ', values);
				let login={
						"username": values.userName,
						"password": values.password,
				}
				axios.post('/login',login).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
				this.setState({redirect: true});  
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
		if (this.state.redirect) {  
			return <Redirect push to="/Content" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
		}  
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         
        </FormItem>
      </Form>
    );
  }
}
const AntLogin = Form.create()(NormalLoginForm);

export default AntLogin