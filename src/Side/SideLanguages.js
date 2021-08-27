import React, { Component } from 'react';

import {Grid, Divider, Typography, Collapse, ListItem} from '@material-ui/core';

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import ColoredDivider from '../Components/ColoredDivider';
import data from '../JoseVelarde.json';
import Theme from '../Colors';
class SideLanguages extends Component {
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
				<Grid item xs={12} md={12} lg={12} sx={{display: 'flex'}}>
					<ListItem button onClick={this.handleClick}>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
						<Typography variant="h5" px={1} sx={{alignSelf: 'center', letterSpacing: '0.15rem'}}>Languages</Typography>
						<ColoredDivider sx={{flexGrow: '1', height: '1px', alignSelf: 'center'}}/>
						{this.state.open ? <FaMinusCircle color={Theme.textLightTerciaryTop}/> : <FaPlusCircle color={Theme.textLightTerciaryTop}/>}
					</ListItem>
				</Grid>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit sx={{width: '100%'}}>
					{data.Filler.Languages.map((lang, index) =>
						<Grid item container key={ "lang" + index} px={3} sx={{display :'flex', justifyContent: 'space-between'}} rowSpacing={1}>
							<Grid item xs={7} md={7} lg={7} sx={{textAlign: 'start', alignSelf: 'center'}}>
								<Typography variant="subtitle1" fontWeight="600" >{lang["Language"]}</Typography>
							</Grid>
							<Grid item xs={5} md={5} lg={5} sx={{textAlign: 'end', alignSelf: 'center'}}>
								<Typography variant="subtitle1" color='text.secondary'>{lang["Proficiency"]}</Typography>
							</Grid>
							<Grid item xs={12} md={12} lg={12}>
								{index === (data.Filler.Languages.length - 1)?
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

export default SideLanguages;