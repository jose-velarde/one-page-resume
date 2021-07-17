import React, { Component } from 'react';

import {Grid, FormGroup, FormControlLabel, Switch, ThemeProvider, Paper} from '@material-ui/core';
import {styled, createTheme} from '@material-ui/core/styles';

import Contact from './Side/Contact';
import SideEducation from './Side/SideEducation';
import SideSkills from "./Side/SideSkills";
import SideLanguages from "./Side/SideLanguages";

import Summary from './Main/Summary';
import Experience from './Main/Experience';
import Projects from './Main/Projects';
import Courses from './Main/Courses';

import './App.css';
import 'fontsource-roboto'


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				'#fff',
			)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			'& + .MuiSwitch-track': {
			opacity: 1,
			backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
			},
		},
	},
	'& .MuiSwitch-thumb': {
	backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
	width: 32,
	height: 32,
	'&:before': {
		content: "''",
		position: 'absolute',
		width: '100%',
		height: '100%',
		left: 0,
		top: 0,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
		'#fff',
		)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
	},
	},
	'& .MuiSwitch-track': {
	opacity: 1,
	backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
	borderRadius: 20 / 2,
	},
}));

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			showContactLinkText: false,
			theme: false,
			contactHeight : 0
		};
		this.buttonHeight = 50
		this.currentTheme = createTheme({
			palette:{
				mode: this.state.theme? "light" : "dark",
			},
		})	
	}

	toggleLinkText = () => {
		this.setState(prevState => ({
			showContactLinkText: !prevState.showContactLinkText,
		}));

	}
	toogleTheme = () => {
		this.setState(prevState => ({
			theme: !prevState.theme
		}));
		
	}
	handleGetHeight = (height) => {
		this.contactHeight = height
		this.setState({contactHeight: height})
	}

	render(){
		this.currentTheme = createTheme({
			palette:{
				mode: this.state.theme? "dark" : "light",
			},
		})
		return(
			<ThemeProvider theme={this.currentTheme} >
				<Paper square className="noScroll scroll4" sx={{height: '100vh', display: 'flex', justifyContent: 'center'}}>
					{/* <Grid container sx={{width: '80%'}}> */}
					<Grid container>
						<Grid item xs={12} md={5} lg={3}>
							<Grid container sx={{justifyContent: 'center'}}>
								<FormGroup row>
									<FormControlLabel
										control={<MaterialUISwitch theme={this.currentTheme} sx={{ m: 1 }} checked={this.state.theme} />}
										onChange={() => this.toogleTheme()}
										label=""
									/>
									<FormControlLabel
											control={
												<Switch checked={this.state.showContactLinkText} onChange={() => this.toggleLinkText()} name="contactLinks" />
											}
											label="Show Links"
										/>
								</FormGroup>
							</Grid>
							{/* Use key to force componentDidMount() and get the component new height, very important */}
							<Grid container px={2}>
								<Contact showLinkText={this.state.showContactLinkText} 
								key={this.state.showContactLinkText}
								getHeight={this.handleGetHeight}/>
							</Grid>
							<Grid container p={2} 
							className="scrollableSection scroll4"
							sx={{height: ['auto','auto', `calc(100vh - ${this.buttonHeight}px - ${this.contactHeight}px)`]}}>
								<SideEducation/>
								<SideLanguages/>
								<SideSkills/>
							</Grid>
						</Grid>
						<Grid item xs={12} md={7} lg={9}>
							<Grid container p={2} className="scrollableSection scroll4" sx={{height: ['auto', 'auto', '100vh']}}>
								<Summary/>
								<Experience/>
								<Projects/>
								<Courses/>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</ThemeProvider>
		);
	}
}

export default App;
