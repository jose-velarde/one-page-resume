import React, { Component } from 'react';

import {Chip} from '@material-ui/core';


class RandomColorChip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bgColor: "default"
		}
		this.colors = ["default", "primary", "secondary", "error", "warning", "info", "success"]
	}

	changeColors = () =>{
		let index = Math.floor(Math.random() * (6))
		while (this.colors[index] === this.state.bgColor){
			index = Math.floor(Math.random() * (6))
		}
		
		this.setState((prevState) =>({
			bgColor: this.colors[index]
		}));	
	}

	render() { 
		return (
				<>
					<Chip {...this.props} onClick={this.changeColors} color={this.state.bgColor}/>
				</>
		);
	}
}

export default RandomColorChip;