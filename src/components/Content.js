import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/all.css'


class Content extends Component {
	constructor(props){
		super(props)
		this.state={
			tabArr:[
				{"name":"tab1","con":"第一个"},  
				{"name":"tab2","con":"第二个"},  
            ],  
			tabKey:0
		}
	}
	tabFn(index){
		this.setState((prevState)=>({
			tabKey:index
		}))
	}
	render(){
		return (
			<div className="box">
				<div>{
					this.state.tabArr.map((item,index)=>{
						return <span key={index} className={this.state.tabKey===index?"tabOn":""} onClick={this.tabFn.bind(this,index)}>{item.name}</span>
					})
					
				}</div>
				<div>{
					this.state.tabArr[this.state.tabKey].con
				}</div>
				<Link className="getout" to="/">退出</Link>
			</div>
		)
	}
}
export default Content