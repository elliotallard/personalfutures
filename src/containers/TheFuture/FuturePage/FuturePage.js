import React from "react";
import { useParams } from "react-router";


import firebase from "firebase/app";
import { firebaseConfig } from '../../../secret.firebase.js';
require("firebase/firestore");


const db = firebase.firestore();






const FuturePage = () => {
  
	const { id } = useParams();
	
	const docRef = db.collection("futures").doc(id);

	let data = [];

	docRef.get().then(function(doc) {
	    if (doc.exists) {
	        data = doc.data();
	        console.log(data);
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});

	
	

	


	






	return (
	<div className="container">
	  <br />
	  <div className="row">
	    <h1>Hello there {window.future}</h1>
	  </div>
	</div>
  );
};

export default FuturePage;
