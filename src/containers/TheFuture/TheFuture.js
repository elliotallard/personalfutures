
import React, {Component} from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Cloud from '../../assets/cloud.png';






class Future extends Component {

  state = {
    clouds: [
      {
        linkTo: "homePage",
      },
      {
        linkTo: "homePage",
      },
      {
        linkTo: "homePage",
      },
    ],
  };


  render () {
   

    return (
      <div class="container">


        {this.state.clouds.map((cloud, idx) => {
            return (
              <a href={this.cloud.linkTo} > 
                <img src={Cloud} />
              </a>
            );
          })}

      </div>

    );
  };


};


export default Future;