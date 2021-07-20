import React, { Component } from 'react';

import {CssBaseline, Grid, FormGroup, FormControlLabel, Switch, ThemeProvider, Paper} from '@material-ui/core';
import {styled, createTheme} from '@material-ui/core/styles';

import MaterialUISwitch from './Components/MaterialUISwitch';

import Contact from './Side/Contact';
import SideSkills from "./Side/SideSkills";
import SideLanguages from "./Side/SideLanguages";
import SideInterests from "./Side/SideInterests";

import Summary from './Main/Summary';
import Education from './Main/Education';
import Experience from './Main/Experience';
import Projects from './Main/Projects';
import Courses from './Main/Courses';

import Theme from './Colors'
import './App.css';
import 'fontsource-roboto'


const TopSideGrid = styled(Grid)(({theme})=> ({
	backgroundColor: theme.palette.mode === 'dark' ? Theme.bgDarkTop : Theme.bgLightTop,
	transition: theme.transitions.create(['all', 'background-color'],{duration: '.5s', easing: 'ease'}),
	})
)
const BottomSideGrid = styled(Grid)(({theme})=> ({
	backgroundColor: theme.palette.mode === 'dark' ? Theme.bgDarkBottom : Theme.bgLightBottom,
	transition: theme.transitions.create(['all', 'background-color'],{duration: '.5s', easing: 'ease'}),
	})
)
const MainGrid = styled(Grid)(({theme})=> ({
	backgroundColor: theme.palette.mode === 'dark' ? Theme.bgDarkMain : Theme.bgLightMain,
	transition: theme.transitions.create(['all', 'background-color'],{duration: '.5s', easing: 'ease'}),
	})
)

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			showContactLinkText: false,
			themeMode: false,
			contactHeight : 0
		};
		this.buttonHeight = 50
	}

	toggleLinkText = () => {
		this.setState(prevState => ({
			showContactLinkText: !prevState.showContactLinkText,
		}));

	}
	toogleTheme = () => {
		this.setState(prevState => ({
			themeMode: !prevState.themeMode
		}));
		
	}
	handleGetHeight = (height) => {
		this.contactHeight = height
		this.setState({contactHeight: height})
	}

	render(){
		this.topSideGridTheme = createTheme({
			palette:{
				mode: this.state.themeMode? "dark" : "light",
				text: {
					secondary: this.state.themeMode? Theme.textDarkSecondaryTop : Theme.textLightSecondaryTop,
					terciary: this.state.themeMode? Theme.textDarkTerciaryTop : Theme.textLightTerciaryTop,
				},
				background: {
					default: this.state.themeMode? Theme.bgDarkPaper: Theme.bgLightPaper,
				}
			},
		});
		this.bottomSideGridTheme = createTheme({
			palette:{
				mode: this.state.themeMode? "dark" : "light",
				text: {
					secondary: this.state.themeMode? Theme.textDarkSecondaryBottom : Theme.textLightSecondaryBottom,
					terciary: this.state.themeMode? Theme.textDarkTerciaryBottom : Theme.textLightTerciaryBottom,
				},
				background: {
					default: this.state.themeMode? Theme.bgDarkPaper: Theme.bgLightPaper,
				}
			},
		});
		this.mainGridTheme = createTheme({
			palette:{
				mode: this.state.themeMode? "dark" : "light",
				text: {
					primary: this.state.themeMode? Theme.textDarkPrimaryMain : Theme.textLightPrimaryMain,
					secondary: this.state.themeMode? Theme.textDarkSecondaryMain : Theme.textLightSecondaryMain,
					terciary: this.state.themeMode? Theme.textDarkTerciaryMain : Theme.textLightTerciaryMain,
				},
				background: {
					default: this.state.themeMode? Theme.bgDarkPaper: Theme.bgLightPaper,
				}
			},
		});
		return(
			<ThemeProvider theme={this.mainGridTheme}>
				<CssBaseline />
				<Paper square className="noScroll scroll4" sx={{height: ['auto', 'auto', '100vh'], margin: '0 auto', width: ['100%', '80%', '80%']}}>
					<Grid container>
						<Grid item xs={12} md={5} lg={4}>
							<ThemeProvider theme={this.topSideGridTheme}>
								<TopSideGrid container px={[0, 0, 3]} sx={{justifyContent: 'center', height: '50px'}}>
									<FormGroup row>
										<FormControlLabel
										control={
											<MaterialUISwitch theme={this.mainGridTheme} sx={{ m: 1 }} checked={this.state.themeMode} />
										}
										onChange={() => this.toogleTheme()}
										label=""
										/>
										<FormControlLabel
										control={
											<Switch checked={this.state.showContactLinkText} onChange={() => this.toggleLinkText()} name="contactLinks" />
										}
										label={this.state.showContactLinkText? "Hide Info" : "Show Info"}
										/>
									</FormGroup>
								</TopSideGrid>
								<TopSideGrid container px={[0, 0, 3]}>
									<Contact showLinkText={this.state.showContactLinkText}
									key={this.state.showContactLinkText}
									getHeight={this.handleGetHeight}/>
								</TopSideGrid>
							</ThemeProvider>
							<ThemeProvider theme={this.bottomSideGridTheme}>
								<BottomSideGrid container px={[0, 0, 3]}
								className="scrollableSection scroll4"
								sx={{height: ['auto','auto', `calc(100vh - ${this.buttonHeight}px - ${this.contactHeight}px)`]}}>
									<SideLanguages/>
									<SideSkills/>
									<SideInterests/>
								</BottomSideGrid>
							</ThemeProvider>
						</Grid>
						<ThemeProvider theme={this.mainGridTheme}>
							<MainGrid item xs={12} md={7} lg={8} px={[0, 0, 3]}>
								<Grid container className="scrollableSection scroll4" sx={{height: ['auto', 'auto', '100vh']}}>
									<Summary/>
									<Education/>
									<Experience/>
									<Projects/>
									<Courses/>
								</Grid>
							</MainGrid>
						</ThemeProvider>
					</Grid>
				</Paper>
			</ThemeProvider>
		);
	}
}

export default App;
