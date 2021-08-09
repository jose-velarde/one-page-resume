import React, { Component } from 'react';

import {Grid, Avatar, Typography, MenuList, MenuItem, ListItemIcon, SvgIcon } from '@material-ui/core';

import {FaLinkedin, FaGithub, FaGlobe} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {IoLocationSharp} from 'react-icons/io5';

import data from '../JoseVelarde.json';

class Contact extends Component {
	componentDidMount() {
		this.height = this.contactComponent.clientHeight;
		this.props.getHeight(this.height)
	}

	render(){
		return(
			<Grid container ref={(contact) => {this.contactComponent = contact}}>
				<Grid item xs={12} md={12} lg={12} sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
					<Avatar alt="José Velarde" src={process.env.PUBLIC_URL + '/profile.png'} sx={{ width: 140, height: 150}}/>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Typography variant="h4" align="center" sx={{letterSpacing: '0.10rem'}}>{data.Contact['Name']} {data.Contact['Last Name']}</Typography>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Typography variant="h6" align="center" color="text.secondary" >{data.Contact['Title']}<br/>{data.Contact['Profession']}</Typography>
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Typography variant="h6" align="center" color="text.terciary"><IoLocationSharp/>{data.Contact['City']}</Typography>
				</Grid>
				<Grid item xs={12} md={12} lg={12} sx={{display:'flex', justifyContent: 'center'}}>
					<MenuList dense sx={this.props.showLinkText? { display: 'table'} : { display: 'flex', flexDirection: 'row'}}>
						<MenuItem component="a" underline="none" target="_blank" href={"mailto:" + data.Contact['Email']}>
							<ListItemIcon>
								<SvgIcon>
									<FiMail/>
								</SvgIcon>
							</ListItemIcon>
							<Typography variant="body1" sx={this.props.showLinkText?  null : {display: "none"}}>{data.Contact['Email']}</Typography>
						</MenuItem>
						<MenuItem component="a" underline="none" target="_blank" href={"https://" + data.Contact['Website']}>
							<ListItemIcon>
								<SvgIcon>
									<FaGlobe/>
								</SvgIcon>
							</ListItemIcon> 
							<Typography variant="body1" sx={this.props.showLinkText? null : {display: "none"}}>{data.Contact['Website']}</Typography>
						</MenuItem>
						<MenuItem component="a" underline="none" target="_blank" href={"https://www.linkedin.com/in/" + data.Contact['Linkedin']}>
							<ListItemIcon>
								<SvgIcon>
									<FaLinkedin/>
								</SvgIcon>
							</ListItemIcon> 
							<Typography variant="body1" sx={this.props.showLinkText? null : {display: "none"}}>{data.Contact['Linkedin']}</Typography>
						</MenuItem>
						<MenuItem component="a" underline="none" target="_blank" href={"https://github.com/" + data.Contact['Github']}>
							<ListItemIcon>
								<SvgIcon>
									<FaGithub/>
								</SvgIcon>
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
