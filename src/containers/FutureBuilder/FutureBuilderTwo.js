
import React, { Component }  from "react";
import { Link } from "react-router-dom";
import Question from './BuilderComponents/Question'

import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './FutureBuilder.css'

import HorizontalLine from "../../assets/horizontal.png";


 
class CareerBuilder extends Component {
 
  state = {
    question1: '',
    question2: '',
    careerOne: '',
    careerTwo: '',
    axisOne: '',
    axisTwo: '',
    next: '',
    back: '',
    img: '',

  };


  render() {


    return (
      <div className="container">
        <div className="row title">

                  <Question content="1. Hello"/>

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
        <div class="row nav">
        	<button />
        </div>
      </div>
    )
  }
}


export default CareerBuilder;

