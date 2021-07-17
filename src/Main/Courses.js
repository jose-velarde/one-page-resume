import React, { Component } from 'react';

import {Grid, Typography, Divider} from '@material-ui/core';

import data from '../JoseVelarde.json'

class Courses extends Component {
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
							Courses
						</Typography>
					</Divider>
				</Grid>
				{data.Filler.Courses.map((course, index) =>
					<Grid item container key={ "course" + index} sx={{display :'flex', justifyContent: 'space-between'}} >
						<Grid item xs={8} md={8} lg={8}>
							<Typography variant="h6" fontWeight="500" >{course["Course"]}</Typography>
						</Grid> 
						<Grid item xs={4} md={4} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
							<Typography variant="subtitle1" color="text.secondary">{course["Status"]}</Typography>
						</Grid>
						<Grid item xs={8} md={8} lg={8}>
							<Typography variant="subtitle1" color="text.secondary" >{course["Date"]}</Typography>
						</Grid> 
						<Grid item xs={4} md={4} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
							<Typography variant="subtitle1" color="text.secondary">{course["Platform"]}</Typography>
						</Grid>
						<Grid item xs={12} md={12} lg={12}>
							{index === (data.Filler.Courses.length - 1)?
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

export default Courses;