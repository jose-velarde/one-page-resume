import React, { Component } from 'react';

import {Grid, Divider, Typography, Collapse, ListItem, ListItemText} from '@material-ui/core';

import data from '../JoseVelarde.json';

class SideEducation extends Component {
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

	render() { 
		return (
			<Grid container rowSpacing={1.5}>
				<Grid item xs={12} md={12} lg={12}>
					<ListItem button onClick={this.handleClick}>
						<ListItemText>
							<Divider variant="fullWidth">
								<Typography variant="h5" >
									Education
								</Typography>
							</Divider>
						</ListItemText>
					</ListItem>
				</Grid>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					{data.Education.map((edu, index) =>
						<Grid item container key={ "edu" + index}>
							<Grid item xs={12} md={12} lg={12} >
								<Typography variant="h6" fontWeight="500" >{edu["Degree"]}</Typography>
							</Grid>
							<Grid item xs={12} md={12} lg={12}>
								<Typography variant="body1" >{edu["Institution"]}</Typography>
							</Grid>
							<Grid item container sx={{display :'flex', justifyContent: 'space-between'}} >
								<Grid item xs={5} md={5} lg={8} sx={{display: 'flex'}}>
									<Typography variant="subtitle1" color="text.secondary" sx={{alignSelf: 'center'}}>{edu["Date"]}</Typography>
								</Grid>
								<Grid item xs={7} md={7} lg={4} sx={{alignSelf: 'flex-end'}}>
									<Typography variant="subtitle1" color="text.secondary"  sx={{textAlign: 'end', alignSelf: 'center'}}>{edu["Location"]}</Typography>
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

export default SideEducation;