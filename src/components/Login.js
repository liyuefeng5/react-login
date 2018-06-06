import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props)
		console.log(props)
		this.state={
			name:"",
			password:""
		}
	}
	loginfn(e){
		if(this.state.name===''||this.state.password===''){
			alert("请输入账户或密码")
		}else{
			this.setState({redirect: true});  
		}
	}
	nameFn(event){
        this.setState({name: event.target.value});
	}
	passwordFn(){
		this.setState({password: this.refs.password.value});
	}
	render(){
		if (this.state.redirect) {  
			return <Redirect push to="/Content" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
		}  
		return (
			<div>
				<h3>登录</h3>
				<input type="text" placeholder="账户" ref='name' value={this.state.name} onChange={this.nameFn.bind(this)}/>
				<br/>
				<input type="password" placeholder="密码" ref='password' value={this.state.password} onChange={this.passwordFn.bind(this)}/>
				<br/>
				<button onClick={this.loginfn.bind(this)}>立即登录</button>
			</div>
		)
	}
}
export default Login