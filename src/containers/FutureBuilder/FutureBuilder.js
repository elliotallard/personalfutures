
import React, { Component }  from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

import HorizontalScroll from 'react-scroll-horizontal';

import appRoutes from "../../shared/appRoutes";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './FutureBuilder.css'

import HorizontalLine from "../../assets/horizontal.png";
import VerticalLine from "../../assets/vertical.png";
import Both from "../../assets/both.png";

import Quadrant from "./BuilderComponents/Quadrant";


import firebase from "firebase/app";
import { firebaseConfig } from '../../secret.firebase.js';
require("firebase/firestore");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();




 
class FutureBuilder extends Component {
 
  state = {
    careerOne: '',
    careerTwo: '',
    axisOne: '',
    axisTwo: '',
    quadrantOne: '',
    quadrantTwo: '',
    quadrantThree: '',
    quadrantFour: '',

  };






  careerOneInputHandler = event => {
    this.setState({
      careerOne: event.target.value,
    });
  };


  careerTwoInputHandler = event => {
    this.setState({
      careerTwo: event.target.value,
    });
  };

  axisOneInputHandler = event => {
    this.setState({
      axisOne: event.target.value,
    });
  };


  axisTwoInputHandler = event => {
    this.setState({
      axisTwo: event.target.value,
    });
  };

  quadrantOneInputHandler = event => {
    this.setState({
      quadrantOne: event.target.value,
    });
  };

  quadrantTwoInputHandler = event => {
    this.setState({
      quadrantTwo: event.target.value,
    });
  };

  quadrantThreeInputHandler = event => {
    this.setState({
      quadrantThree: event.target.value,
    });
  };

  quadrantFourInputHandler = event => {
    this.setState({
      quadrantFour: event.target.value,
    });
  };

  submitFuture = () => {
    db.collection("futures").add({
      careerOne: this.state.careerOne,
      careerTwo: this.state.careerTwo,
      axisOne: this.state.axisOne,
      axisTwo: this.state.axisTwo,
      quadrantOne: this.state.quadrantOne,
      quadrantTwo: this.state.quadrantTwo,
      quadrantThree: this.state.quadrantThree,
      quadrantFour: this.state.quadrantFour,
    })
  }


  render() {


    return (
      <div className="container">
        <div className="row">
            <div className="parent">
              
  
              <HorizontalScroll reverseScroll={true}>


                
                      <div className="child" id="section1">

                        <h3> 1. Consider two alternative careers you imagine yourself having. </h3>   
                        
                        <div className="row horizontal">
                          <Col md={{ span: 2}}>
                            <input
                            type="text"
                            value={this.state.careerOne}
                            onChange={e => this.careerOneInputHandler(e)}
                            placeholder="Career option 1"
                          />
                          </Col>


                          <Col md={{ span: 6}}>
                            <br/> <br/> <br/>
                            <img src={HorizontalLine} />
                          </Col>
                          <Col md={{ span: 3, offset: 1 }}>
                              <input
                            type="text"
                            value={this.state.careerTwo}
                            onChange={e => this.careerTwoInputHandler(e)}
                            placeholder="Career option 2"
                          />
                          </Col>

                        </div>

                    <h3> &emsp; It could be 'professional soccer player', or 'consultant'. </h3> 
                    

                    <div className="row">
                      <Col md={{ span: 2, offset: 5 }}>
                        <a href="#section2">
                          <Button variant="outline-secondary">Next ></Button>
                        </a>
                      </Col>
                    </div>   

                  </div>




                <div className="child" id="section2" >
                  <h3> 2. Now, consider another axis of uncertainty. </h3> 
                  <br/>

                  <div className="row title">
                    <input
                            type="text"
                            value={this.state.axisOne}
                            onChange={e => this.axisOneInputHandler(e)}
                            placeholder="Uncertainty 1 ..."
                          />
                  </div>

                  <div className="row horizontal both">
                          <Col md={{ span: 1}}>
                            {this.state.careerOne}
                          </Col>


                          <Col md={{ span: 6}}>
                            <img src={Both} />
                          </Col>

                          <Col md={{ span: 1, offset: 3 }}>
                              {this.state.careerTwo}
                          </Col>

                  </div>

                  <div className="row title">
                    <input
                            type="text"
                            value={this.state.axisTwo}
                            onChange={e => this.axisTwoInputHandler(e)}
                            placeholder="Uncertainty 2 ..."
                          />
                  </div>

                  <br/>

              
                  <h3> &emsp; It might be 'professional practice' vs. 'research', or 'have a boss' vs. 'be a boss'. <br/>
                       &emsp; Take some liberty, what are two polarized values you both see as appealing? </h3> 

                    

                  <div className="row">
                    <Col md={{ span: 3, offset: 5 }}>
                      <a href="#section3">
                        <Button variant="outline-secondary">Next ></Button>
                      </a>
                    </Col>
                  </div>
                  
                </div>






                <div className="child" id="section3">
                  <h3> 3. Take a look! You just built a futures graph. </h3> 

                  <div className="row">
                    <Col md={{ span: 2, offset: 5}}>
                      {this.state.axisOne}
                    </Col>
                  </div>
                  <br/> <br/>
                  <div className="row horizontal both">
                          <Col md={{ span: 1}}>
                            {this.state.careerOne}
                          </Col>


                          <Col md={{ span: 6}}>
                            <img src={Both} />
                          </Col>

                          <Col md={{ span: 2, offset: 3 }}>
                              {this.state.careerTwo}
                          </Col>

                  </div>

                  <div className="row">
                    <Col md={{ span: 2, offset: 5}}>
                      {this.state.axisTwo}
                    </Col>
                    <br/>
                    <br/>
                  </div>


                  <div className="row">
                    <Col md={{ span: 2, offset: 5 }}>
                      <a href="#section4">
                        <Button variant="outline-secondary">Next ></Button>
                      </a>
                    </Col>
                  </div>  
                </div> 







                <div className="child" id="section4">
                  <Quadrant 
                    career={this.state.careerOne} 
                    uncertainty={this.state.axisOne} 
                    textbox={this.state.quadrantOne} 
                    changed={this.quadrantOneInputHandler}
                  />


                  <div className="row">
                    <Col md={{ span: 2, offset: 5 }}>
                      <a href="#section5">
                        <Button variant="outline-secondary">Next ></Button>
                      </a>
                    </Col>
                  </div>
                </div>





                <div className="child" id="section5">
                  <Quadrant 
                    career={this.state.careerOne} 
                    uncertainty={this.state.axisTwo} 
                    textbox={this.state.quadrant} 
                    changed={this.quadrantTwoInputHandler}
                  />


                  <div className="row">
                    <Col md={{ span: 2, offset: 5 }}>
                      <a href="#section6">
                        <Button variant="outline-secondary">Next ></Button>
                      </a>
                    </Col>
                  </div>
                </div>



                <div className="child" id="section6">
                  <Quadrant 
                    career={this.state.careerTwo} 
                    uncertainty={this.state.axisOne} 
                    textbox={this.state.quadrant} 
                    changed={this.quadrantThreeInputHandler}
                  />


                  <div className="row">
                    <Col md={{ span: 2, offset: 5 }}>
                      <a href="#section7">
                        <Button variant="outline-secondary">Next ></Button>
                      </a>
                    </Col>
                  </div>
                </div>





                <div className="child" id="section7">
                  <Quadrant 
                    career={this.state.careerTwo} 
                    uncertainty={this.state.axisTwo} 
                    textbox={this.state.quadrant} 
                    changed={this.quadrantFourInputHandler}
                  />


                  <div className="row">
                    <Col md={{ span: 2, offset: 5 }}>
                      <a href="#section8">
                        <Button variant="outline-secondary">Next ></Button>
                      </a>
                    </Col>
                  </div>
                </div>

             






                <div className="child" id="section8">
                  <h3> You are done :) Take a look, take a screenshot. If you feel comfortable, you can submit this to the public archive on this site, called "The Future". Please be nice, moderate your own content. </h3> 

                  <div className="row">
                    <div className="Quadrant" id="QuadrantOne">
                      {this.state.quadrantOne}
                    </div>
                    <Col md={{ span: 2, offset: 5}}>
                      {this.state.axisOne}
                    </Col>
                    <div className="Quadrant" id="QuadrantTwo">
                      {this.state.quadrantTwo}
                    </div>
                  </div>
                  <div className="row horizontal both">
                          <Col md={{ span: 1}}>
                            {this.state.careerOne}
                          </Col>


                          <Col md={{ span: 6}}>
                            <img src={Both} />
                          </Col>

                          <Col md={{ span: 2, offset: 3 }}>
                              {this.state.careerTwo}
                          </Col>
                  </div>

                  <div className="row">
                    <div className="Quadrant" id="QuadrantThree">
                      {this.state.quadrantThree}
                    </div>
                    <Col md={{ span: 2, offset: 5}}>
                      {this.state.axisTwo}
                    </Col>
                    <div className="Quadrant" id="QuadrantFour">
                      {this.state.quadrantFour}
                    </div>
                  </div>


                  <div className="row QuizNav">
                    <Col md={{ span: 2, offset: 8 }}>
                      <Link
                          key="future"
                          to={`${appRoutes.futures}`}
                      >
                        <Button onClick={() => this.submitFuture()} variant="secondary">SUBMIT ></Button>
                      </Link>
                    </Col>
                  </div>  
                </div> 



              </HorizontalScroll>

              
            </div>
        </div>
      </div>
    )
  }
}


export default FutureBuilder;

