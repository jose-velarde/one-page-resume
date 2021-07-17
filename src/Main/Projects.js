import React, { Component } from 'react';

import {Grid, Typography, Divider} from '@material-ui/core';

import data from '../JoseVelarde.json'

class Projects extends Component {
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
							Projects
						</Typography>
					</Divider>
				</Grid>
				{data.Projects.map((proj, index) => 
					<Grid item container key={ "proj" + index} rowSpacing={0.6}>
						<Grid item xs={12} md={12} lg={12} >
							<Typography variant="h6" fontWeight="500" >{proj["Role"]}</Typography>
						</Grid>
						<Grid item xs={12} md={12} lg={12}>
							<Typography variant="body1" >{proj["Institution"]}</Typography>
						</Grid>
						<Grid item container sx={{display :'flex', justifyContent: 'space-between'}} >
							<Grid item xs={5} md={5} lg={8} sx={{display: 'flex'}}>
								<Typography variant="subtitle1" color="text.secondary" sx={{alignSelf: 'center'}}>{proj["Date"]}</Typography>
							</Grid> 
							<Grid item xs={7} md={7} lg={4} sx={{alignSelf: 'flex-end'}}>
								<Typography variant="subtitle1" color="text.secondary"  sx={{textAlign: 'end', alignSelf: 'center'}}>{proj["Location"]}</Typography>
							</Grid>
						</Grid>
						{proj["Tasks"].map((task, index)=>
							<Grid item xs={12} md={12} lg={12} >
								{task}
							</Grid>
						)}
						<Grid item xs={12} md={12} lg={12} mt={1}>
							{index === (data.Projects.length - 1)?
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

export default Projects;