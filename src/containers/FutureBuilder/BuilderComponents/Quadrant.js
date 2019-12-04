import React from 'react';
import Example from "./Example";

import Col from 'react-bootstrap/Col';

const Quadrant = (props) => {
	return (
		
		<div>
			<h2> 4. Now, we need to fill in each quadrant. </h2> 

			<div className="row">
				<h2><b> {props.career} </b> and <b> {props.uncertainty} </b> </h2>
			</div>
			<div className="row quadrant">
				<Col md={{ span: 4, offset: 2}}>
				    <textarea
				      type="text"
				      value={props.value}
				      onChange={e => props.changed(e)}
				      placeholder="Type something … "
				   />
				</Col>
				<Col md={{ span: 4}}>
				    <Example />
				</Col>
			</div>

			<div className="row">
				<Col md={{ span: 10}}>
				    <h2> What might push you into each quadrant? What barriers might you encounter in each quadrant? </h2>
				</Col>
			</div>


		</div>
	);
}

export default Quadrant;