import fetch from 'node-fetch';

import firebase from "firebase/app";
import { firebaseConfig } from '../../secret.firebase.js';
require("firebase/firestore");



const firebaseConfig = {
    apiKey: process.env.futureDbApiKey,
    authDomain: "personal-futures-2e97f.firebaseapp.com",
    databaseURL: "https://personal-futures-2e97f.firebaseio.com",
    projectId: "personal-futures-2e97f",
    storageBucket: "personal-futures-2e97f.appspot.com",
    messagingSenderId: process.env.futureMessagingSenderId,
    appId: process.env.futureAppId
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



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



exports.handler = async event => {
  // We can retrive type of http method in event parameter
  const { httpMethod } = event;
  
  if (httpMethod === 'GET') {
  	const docRef = db.collections('futures');
    const response = await docRef.get().then(function(doc) {doc.data()})
    const movieData = await response;

    return { statusCode: 200, body: movieData };
  }
  
  return { statusCode: 404 };
}