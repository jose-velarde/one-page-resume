import React, { Component } from 'react';

import {Grid, Typography, Divider, Chip} from '@material-ui/core';

import data from '../JoseVelarde.json'

class Experience extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {  }
	// }

	render() { 
		return (
			<Grid container rowSpacing={1.5} mt={1}>
				<Grid item xs={12} md={12} lg={12}>
					<Divider variant="fullWidth">
						<Typography variant="h5" >
							Experience
						</Typography>
					</Divider>
				</Grid>
				{data.Experience.map((exp, index) => 
					<Grid item container key={ "exp" + index} rowSpacing={0.6}>
						<Grid item xs={12} md={12} lg={12} >
							<Typography variant="h6" fontWeight="500" >{exp["Job Title"]}</Typography>
						</Grid>
						<Grid item xs={12} md={12} lg={12}>
							<Typography variant="body1" >{exp["Organization"]}</Typography>
						</Grid>
						<Grid item container sx={{display :'flex', justifyContent: 'space-between'}} >
							<Grid item xs={5} md={5} lg={8} sx={{display: 'flex'}}>
								<Typography variant="subtitle1" color="text.secondary" sx={{alignSelf: 'center'}}>{exp["Date"]}</Typography>
							</Grid> 
							<Grid item xs={7} md={7} lg={4} sx={{alignSelf: 'flex-end'}}>
								<Typography variant="subtitle1" color="text.secondary"  sx={{textAlign: 'end', alignSelf: 'center'}}>{exp["Location"]}</Typography>
							</Grid>
						</Grid>
						<Grid item xs={12} md={12} lg={88}>
							<Divider textAlign="left">
								<Chip label="Achievements" />
							</Divider>
						</Grid>
						{exp["Tasks"].map((task, index)=>
							<Grid item xs={12} md={12} lg={12}>
								{task}
							</Grid>
						)}
						<Grid item xs={12} md={12} lg={12} mt={1}>
							{index === (data.Experience.length - 1)?
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

export default Experience;