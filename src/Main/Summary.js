import React, { Component } from 'react';

import {Grid, Typography, Divider} from '@material-ui/core';

import data from '../JoseVelarde.json'

class Summary extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {  }
	// }
	
	render() { 
		return (  
			<Grid container rowSpacing={1.5}>
				<Grid item xs={12} md={12} lg={12}>
					<Divider variant="fullWidth">
						<Typography variant="h5" >
							Summary
						</Typography>
					</Divider>
				</Grid>
				<Grid item  xs={12} md={12} lg={12}>
					<Typography>{data.Summary}</Typography>
				</Grid>
			</Grid>
		);
	}
}
export default Summary;