import React, {Component} from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";


import 'bootstrap/dist/css/bootstrap.min.css';
import './TheFuture.css';

import Cloud from '../../assets/cloud.png';

import firebase from "firebase/app";
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
        <div className="row">
          <center><h1>The Future</h1></center>
        </div>
        <div className="row">
          {this.state.futureList.map((future, idx) => {
            return (
              <Link
                key={future.id}
                to={`${appRoutes.futures}/${future.id}`}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 cloud"
              >
                <img src={Cloud} alt={future.id} />
              </Link>
            );
          })}
        </div>
      </div>

    );
  };


};


export default Futures;