import React, { Component } from 'react';

import {Grid, Typography, Collapse, ListItem} from '@material-ui/core';

import ColoredDivider from '../Components/ColoredDivider';
import RandomColorChip from '../Components/RandomColorChip';
import data from '../JoseVelarde.json';


class SideInterests extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
		}
	}
	

	handleClick = () =>{
		this.setState(prevState=>({
			open: !prevState.open
		}));
	}
	updateDimensions = () => {
		if(window.innerWidth < 900){
			this.setState({ open: false });
		} else {
			this.setState({ open: true });
		}
	}
	componentDidMount() {
		this.updateDimensions()
		window.addEventListener('resize', this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}
	render() { 
		return (
			<Grid container rowSpacing={1.5} pb={2}>
				<Grid item xs={12} md={12} lg={12} sx={{display: 'flex'}}>
					<ListItem button onClick={this.handleClick}>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
						<Typography variant="h5" px={1} sx={{alignSelf: 'center'}}>Interests</Typography>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
					</ListItem>
				</Grid>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit sx={{width: '100%'}} >
					{data.Filler.Interests.map((interest, index) =>
							<RandomColorChip key={ "interest" + index} label={interest} sx={{typography: 'body1', margin: '3px'}}/>
					)}
				</Collapse>
			</Grid>
		);
	}
}

export default SideInterests;
