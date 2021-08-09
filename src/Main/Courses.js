import React, { Component } from 'react';

import {Grid, Typography, Divider, Collapse, ListItem} from '@material-ui/core';

import ColoredDivider from '../Components/ColoredDivider';
import data from '../JoseVelarde.json'

class Courses extends Component {
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

	render() { 
		return (
			<Grid container rowSpacing={1.5}>
				<Grid item xs={12} md={12} lg={12}>
					<ListItem button onClick={this.handleClick}>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
						<Typography variant="h5" px={1} sx={{alignSelf: 'center', letterSpacing: '0.15rem'}}>Courses</Typography>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
					</ListItem>				
				</Grid>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit sx={{width: '100%'}}>
					{data.Filler.Courses.map((course, index) =>
						<Grid item container key={ "course" + index} sx={{display :'flex', justifyContent: 'space-between'}} rowSpacing={0.3} px={3}>
							<Grid item xs={7} md={7} lg={8} sx={{textAlign: 'start', alignSelf: 'center'}}>
								<Typography variant="subtitle1" fontWeight="600" >{course["Course"]}</Typography>
							</Grid>
							<Grid item xs={5} md={5} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
								<Typography variant="subtitle1" color="text.terciary">{course["Status"]}</Typography>
							</Grid>
							<Grid item xs={7} md={7} lg={8} sx={{textAlign: 'start', alignSelf: 'center'}}>
								<Typography variant="subtitle1" color="text.secondary" >{course["Date"]}</Typography>
							</Grid>
							<Grid item xs={5} md={5} lg={4} sx={{textAlign: 'end', alignSelf: 'center'}}>
								<Typography variant="subtitle1" component="a" sx={{textDecoration: 'none', ":hover":{textDecoration: 'underline'}, color: 'inherit'}} href={course["url"]}>{course["Platform"]}</Typography>
							</Grid>
							<Grid item xs={12} md={12} lg={12}>
								{index === (data.Filler.Courses.length - 1)?
									null
									:
									<Divider variant="center"/>
								}
							</Grid>
						</Grid>
					)}
				</Collapse>
			</Grid>
		);
	}
}

export default Courses;