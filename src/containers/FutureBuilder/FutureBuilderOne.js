
import React, { Component }  from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './FutureBuilder.css'

import HorizontalLine from "../../assets/horizontal.png";


 
class ScrollingHorizontally extends Component {
 
  state = {
    careerOne: '',
    careerTwo: '',
    axisOne: '',
    axisTwo: '',
  };


  render() {


    return (
      <div className="container">
        <div className="row title">

                  <h2> 1. Consider two alternative careers you have considered having </h2>  

                  <br/> 

        </div>

        <div class="row horizontal">

            
              <input
                type="text"
                value={this.state.careerOne}
                // onChange={e => this.careerInputHandler(e)}
                placeholder="ex. Plumber"
              />

                  <input
                    type="text"
                    value={this.state.careerTwo}
                    // onChange={e => this.careerInputHandler(e)}
                    placeholder="ex. Artist"
                  />

                  <div class="horizontal">  
                    <img src={HorizontalLine} />
                  </div>
        </div>
      </div>
    )
  }
}


export default ScrollingHorizontally;

