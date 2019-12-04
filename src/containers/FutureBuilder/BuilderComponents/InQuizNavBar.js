import React from 'react';
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';

const InQuizNavBar = (props) => {
	return (
		
		<div>
			<span onClick={() => props.addItemToList()} className="AddNewToDoButton">
            Add
          </span>


		</div>
	);
}

export default Quadrant;