import React, { Component } from 'react';

import {Grid, Typography, ListItem} from '@material-ui/core';

import ColoredDivider from '../Components/ColoredDivider';
import data from '../JoseVelarde.json'

class Summary extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {  }
	// }
	
	render() { 
		return (  
			<Grid container rowSpacing={1.5}>
				<Grid item xs={12} md={12} lg={12} sx={{display: 'flex'}}>
					<ListItem button onClick={null}>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
						<Typography variant="h5" px={1} sx={{alignSelf: 'center'}}>Summary</Typography>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
					</ListItem>
				</Grid>
				<Grid item  xs={12} md={12} lg={12} px={3}>
					<Typography variant="body1" dangerouslySetInnerHTML={{__html: data.Summary}}></Typography>
				</Grid>
			</Grid>
		);
	}
}
export default Summary;