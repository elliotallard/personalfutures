import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";


import Button from 'react-bootstrap/Button';
import './NavBar.css'



const NavBar = () => {
  

    return (
    <div className="container" id="Button-row" >
        <div className="row">
            <NavLink className="navLink" to={appRoutes.home}  >
              <Button variant="outline-secondary">Home</Button> 
            </NavLink>

            <NavLink className="navLink" to={appRoutes.about} >
              <Button variant="outline-secondary">About</Button> 
            </NavLink>

            <NavLink className="navLink" to={appRoutes.futures} >
                <Button variant="outline-secondary">The Future</Button> 
            </NavLink>
        </div>
    </div>
    )

    
    





};

export default NavBar;