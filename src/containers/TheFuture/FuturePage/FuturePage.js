import React, { useState } from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../../shared/appRoutes";

import { useParams } from "react-router";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Both from "../../../assets/both.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import './FuturePage.css';


import firebase from "firebase/app";
import { firebaseConfig } from '../../../secret.firebase.js';
require("firebase/firestore");


const db = firebase.firestore();






const FuturePage = () => {
  
	const { id } = useParams();
	

	const [data, setData] = useState( '' );

	const docRef = db.collection("futures").doc(id);

	docRef.get().then(function(doc) {
	    if (doc.exists && data === '') {
	        setData(doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});






	return (
	<div className="container">
		<div className="row">
	      <Col md={{ span: 3}}>
	      	<h1>The Future</h1>
	      </Col>
	      <Col md={{ span: 2, offset: 7}}>
	      	<Link
                key={data.id}
                to={`${appRoutes.futures}`}
                className="x"
              >
              	<Button variant="outline-secondary">X</Button> 
             </Link>
	      </Col>
	    </div>
	  <div className="middle">
                  <div className="row">
                    <div className="FinalQuadrant" id="FinalQuadrantOne">
                      {data.quadrantOne}
                    </div>
                    <Col md={{ span: 2, offset: 5}}>
                      {data.axisOne}
                    </Col>
                    <div className="FinalQuadrant" id="FinalQuadrantTwo">
                      {data.quadrantTwo}
                    </div>
                  </div>
                  <div className="row FinalHorizontal">
                          <Col md={{ span: 1}}>
                            {data.careerOne}
                          </Col>


                          <Col md={{ span: 6}}>
                            <img src={Both} />
                          </Col>

                          <Col md={{ span: 2, offset: 3 }}>
                              {data.careerTwo}
                          </Col>
                  </div>

                  <div className="row">
                    <div className="FinalQuadrant" id="FinalQuadrantThree">
                      {data.quadrantThree}
                    </div>
                    <Col md={{ span: 2, offset: 5}}>
                      {data.axisTwo}
                    </Col>
                    <div className="FinalQuadrant" id="FinalQuadrantFour">
                      {data.quadrantFour}
                    </div>
                  </div>


                   
                </div> 
	</div>
  );
};

export default FuturePage;
