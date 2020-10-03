import React, {Component} from 'react';

class RComponent extends Component{

	constructor(){
		super();
		this.state = {
			count:0
		}
	};

	changeCount = ()=>{
		this.setState({
			count:this.state.count+1
		})
	}
	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.changeCount}>Click</button>	
			</div>
		);
	}
}


export default RComponent;