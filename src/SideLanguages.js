import React, { Component } from 'react';

import {Grid, Divider, Typography} from '@material-ui/core';

import data from './JoseVelarde.json';
import './Contact.css';

class SideLanguages extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (  
			<Grid container rowSpacing={1.5} mt={1}>
				<Grid item xs={12} md={12} lg={12}>
					<Divider variant="fullWidth">
						<Typography variant="h5" >
							Languages
						</Typography>
					</Divider>
				</Grid>
				{data.Filler.Languages.map((skill, index) =>
					<Grid item container key={ "lang" + index} sx={{display :'flex', justifyContent: 'space-between'}} >
						<Grid item xs={8} md={8} lg={8}>
							<Typography variant="h6" fontWeight="500" >{skill["Language"]}</Typography>
						</Grid> 
						<Grid item xs={3} md={3} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
							<Typography variant="subtitle1" color="text.secondary">{skill["Proficiency"]}</Typography>
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
			</Grid>
		);
	}
}

export default SideLanguages;