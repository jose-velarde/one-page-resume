import React, { Component } from 'react';

import {Grid, Avatar, Typography, MenuList, MenuItem, ListItemIcon} from '@material-ui/core';

import {FaLinkedin, FaGithub, FaGlobe} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {IoLocationSharp} from 'react-icons/io5';

import data from './JoseVelarde.json';
import './Contact.css';


class Contact extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.state={
	// 	}
	// }
	componentDidMount() {
		this.height = this.contactComponent.clientHeight;
		this.props.getHeight(this.height)
	}

	render(){
		return(
			<Grid container ref={(contact) => {this.contactComponent = contact}}>
				<Grid item xs={12} md={12} lg={12} sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
					<Avatar alt="José Velarde" src="./profile.jpg" sx={{ width: 200, height: 230}}/>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Typography variant="h4" align="center">{data.Contact['Name']} {data.Contact['Last Name']}</Typography>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Typography variant="h5" align="center">{data.Contact['Title']}<br/>{data.Contact['Profession']}</Typography>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Typography variant="h6" align="center" color="text.secondary"><IoLocationSharp/>{data.Contact['City']}</Typography>
				</Grid>
				<Grid item xs={12} md={12} lg={12} sx={{display:'flex', justifyContent: 'center'}}>
					<MenuList dense sx={this.props.showLinkText? { display: 'table'} : { display: 'flex', flexDirection: 'row'}}>
						<MenuItem component="a" underline="none" href={"mailto:" + data.Contact['Email']}>
							<ListItemIcon>
								<FiMail/>
							</ListItemIcon>
							<Typography variant="body1" sx={this.props.showLinkText?  null : {display: "none"}}>{data.Contact['Email']}</Typography>
						</MenuItem>
						<MenuItem component="a" underline="none" href={"https://" + data.Contact['Website']}>
							<ListItemIcon>
								<FaGlobe/>
							</ListItemIcon> 
							<Typography variant="body1" sx={this.props.showLinkText? null : {display: "none"}}>{data.Contact['Website']}</Typography>
						</MenuItem>
						<MenuItem component="a" underline="none" href={"https://www.linkedin.com/in/" + data.Contact['Linkedin']}>
							<ListItemIcon>
								<FaLinkedin/>
							</ListItemIcon> 
							<Typography variant="body1" sx={this.props.showLinkText? null : {display: "none"}}>{data.Contact['Linkedin']}</Typography>
						</MenuItem>
						<MenuItem component="a" underline="none" href={"https://github.com/" + data.Contact['Github']}>
							<ListItemIcon>
								<FaGithub/>
							</ListItemIcon> 
							<Typography variant="body1" sx={this.props.showLinkText? null : {display: "none"}}>{data.Contact['Github']}</Typography>
						</MenuItem>
					</MenuList>
				</Grid>
			</Grid>
		)
	}
}

export default Contact;
