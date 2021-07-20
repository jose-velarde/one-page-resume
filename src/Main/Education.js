import React, { Component } from 'react';

import {Grid, Divider, Typography, Collapse, ListItem} from '@material-ui/core';

import ColoredDivider from '../Components/ColoredDivider';
import data from '../JoseVelarde.json';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
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
			<Grid container rowSpacing={1.5}>
				<Grid item xs={12} md={12} lg={12}>
					<ListItem button onClick={this.handleClick}>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
						<Typography variant="h5" px={1} sx={{alignSelf: 'center'}}>Education</Typography>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
					</ListItem>
				</Grid>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit sx={{width: '100%'}}>
					{data.Education.map((edu, index) =>
						<Grid item container key={ "edu" + index} rowSpacing={0.6} px={3}>
							<Grid item container sx={{display :'flex', justifyContent: 'space-between'}}>
								<Grid item xs={5} md={5} lg={8} sx={{textAlign: 'start', alignSelf: 'center'}}>
									<Typography variant="h6" fontWeight="500" >{edu["Degree"]}</Typography>
								</Grid>
								<Grid item xs={7} md={7} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
									<Typography variant="subtitle1">{edu["Date"]}</Typography>
								</Grid>
							</Grid>
							<Grid item container sx={{display :'flex', justifyContent: 'space-between'}} >
								<Grid item xs={5} md={5} lg={8} sx={{textAlign: 'start', alignSelf: 'center'}}>
									<Typography variant="body1" color='text.secondary'>{edu["Institution"]}</Typography>
								</Grid>
								<Grid item xs={7} md={7} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
									<Typography variant="subtitle1" color='text.terciary'>{edu["Location"]}</Typography>
								</Grid>
							</Grid>
							<Grid item xs={12} md={12} lg={12}>
								{index === (data.Education.length - 1)?
									null
									:
									<Divider variant="middle"/>
								}
							</Grid>
						</Grid>
					)}
				</Collapse>
			</Grid>
		);
	}
}

export default Education;