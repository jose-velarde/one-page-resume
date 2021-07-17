import React, { Component } from 'react';

import {Grid, Divider, Typography, Collapse, ListItem, ListItemText} from '@material-ui/core';

import data from '../JoseVelarde.json';

class SideSkills extends Component {
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

	GridItemXs12 = (props) => <Grid item xs={12} {...props} />

	render() { 
		return (
			<Grid container rowSpacing={1.5} mt={1}>
				<Grid item xs={12} md={12} lg={12}>
					<ListItem button onClick={this.handleClick}>
						<ListItemText>
							<Divider variant="fullWidth">
								<Typography variant="h5" >
									Skills
								</Typography>
							</Divider>
						</ListItemText>
					</ListItem>
				</Grid>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit component={this.GridItemXs12}>
					{data.Filler.Skills.map((skill, index) =>
						<Grid item container fluid key={ "skill" + index} sx={{display :'flex', justifyContent: 'space-between'}} >
							<Grid item xs={8} md={8} lg={8}>
								<Typography variant="h6" fontWeight="500" >{skill["Skill"]}</Typography>
							</Grid>
							<Grid item xs={4} md={4} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
								<Typography variant="subtitle1" color="text.secondary">{skill["Level"]}</Typography>
							</Grid>
							<Grid item xs={12} md={12} lg={12}>
								{index === (data.Filler.Skills.length - 1)?
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

export default SideSkills;