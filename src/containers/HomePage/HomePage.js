
import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './HomePage.css';



const homePage = () => {

  return (
    <div className="container">


      <header className="Title-description">
        <h5> Personal futures </h5>
        <br/><br/>

        <p>
          What do you think about your own future? What will you <br/>
          contribute to, what will your everyday life look like?
          <br/><br/>
          Envision your future with this visualization, <br/>
          developed by Peter Scupelli. 
        </p>
      </header>

    </div>

  );
};


export default homePage;

