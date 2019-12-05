
import React, {Component} from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Cloud from '../../assets/cloud.png';


import firebase from "firebase/app";
import { firebaseConfig } from '../../secret.firebase.js';
require("firebase/firestore");


const db = firebase.firestore();





class Futures extends Component {

  state = {
    futureList: [],
  };

  componentDidMount() {
    
    this.unsubscribeFutures = db.collection("futures").onSnapshot(querySnapshot => {

      let futures = [];
      querySnapshot.forEach(snapshot => {
        futures.push({
          ...snapshot.data(),
          id: snapshot.id
        });
      });
      this.setState({ futureList: futures });
    });

  };

  componentWillUnmount () {
    if (this.unsubscribeFutures) {
      this.unsubscribeFutures();
    }
  };


  render () {
   

    return (

      <div className="container">
        <br />
        <h1>Characters that we love...</h1>
        <div className="row">
          {this.state.futureList.map((future, idx) => {
            return (
              <Link
                key={future.id}
                to={`${appRoutes.thefuture}/${future.id}`}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
              >
                <img src={Cloud} alt={future.id} />
                <h5 className="">{future.id}</h5>
              </Link>
            );
          })}
        </div>
      </div>

    );
  };


};


export default Futures;