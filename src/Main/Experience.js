import React, { Component } from 'react';

import {Grid, Typography, Divider, Collapse, ListItem} from '@material-ui/core';

import ColoredDivider from '../Components/ColoredDivider';
import RandomColorChip from '../Components/RandomColorChip';
import data from '../JoseVelarde.json'

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: window.innerWidth < 900? false : true,
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
	// componentDidMount() {
	// 	this.updateDimensions()
		// window.addEventListener('resize', this.updateDimensions);
	// }
	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.updateDimensions);
	// }


	render() { 
		return (
			<Grid container rowSpacing={1.5}>
				<Grid item xs={12} md={12} lg={12}>
					<ListItem button onClick={this.handleClick}>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
						<Typography variant="h5" px={1} sx={{alignSelf: 'center'}}>Experience</Typography>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
					</ListItem>
				</Grid>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit sx={{width: '100%'}}>
					{data.Experience.map((exp, index) =>
						<Grid item container key={ "exp" + index} rowSpacing={0.3} px={3}>
							<Grid item container sx={{display :'flex', justifyContent: 'space-between'}}>
								<Grid item xs={8} md={7} lg={8} sx={{textAlign: 'start', alignSelf: 'center'}}>
									<Typography variant="subtitle1" fontWeight="600">{exp["Job Title"]}</Typography>
								</Grid>
								<Grid item xs={4} md={5} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
									<Typography variant="subtitle1">{exp["Date"]}</Typography>
								</Grid>
							</Grid>
							<Grid item container sx={{display :'flex', justifyContent: 'space-between'}} >
								<Grid item xs={8} md={7} lg={8} sx={{textAlign: 'start', alignSelf: 'center'}}>
									<Typography variant="subtitle1" color="text.secondary" >{exp["Organization"]}</Typography>
								</Grid>
								<Grid item xs={4} md={5} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
									<Typography variant="subtitle1" color="text.terciary">{exp["Location"]}</Typography>
								</Grid>
							</Grid>
							<Grid item container pl={'5%'}>
								<Grid item xs={12} md={12} lg={12}  py={1}>
									<Divider textAlign="left">
										{/* <Chip label="Accomplishments" /> */}
									</Divider>
								</Grid>
								{exp["Tasks"].map((task, index)=>
									<Grid item key={"task" + index} xs={12} md={12} lg={12} display="flex">
										<Typography component="li" color="text.terciary" ></Typography>
										<Typography variant="body1" dangerouslySetInnerHTML={{__html: task}} ></Typography>
									</Grid>
								)}
								<Grid item xs={12} md={12} lg={12} py={1}>
									<Divider textAlign="middle">
										{/* <Chip label="Developed Skills" /> */}
									</Divider>
								</Grid>
								{exp["Stack"].map((stack, index) =>
									<RandomColorChip key={ "stack" + index} label={stack} sx={{typography: 'body1', margin: '3px'}}/>
								)}
							</Grid>
							<Grid item xs={12} md={12} lg={12} my={1} sx={{display :'flex', justifyContent: 'center'}}>
								{index === (data.Experience.length - 1)?
									null
									:
									<ColoredDivider variant="middle" width={"85%"}/>
								}
							</Grid>
						</Grid>
					)}
				</Collapse>
			</Grid>
		);
	}
}

export default Experience;