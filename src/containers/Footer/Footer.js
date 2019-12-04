import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Button from 'react-bootstrap/Button';

import './Footer.css'

const Footer = () => {

	

  	
	return (

		<div className="container" id="Button-row" >
			<div className="row footer">
		    	<NavLink className="navLink" to={appRoutes.futureBuilder}>
		      		<Button variant="outline-secondary" className="footer"> 
		      			Start >
			     	</Button> 
		    	</NavLink>
		    </div>
		</div>
	);

};








export default Footer;