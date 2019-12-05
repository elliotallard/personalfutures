import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import { useParams } from "react-router";



import './App.css';

import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";

import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/About/About";
import FutureBuilder from "./containers/FutureBuilder/FutureBuilder";
import TheFuture from "./containers/TheFuture/TheFuture";
import FuturePage from "./containers/TheFuture/FuturePage/FuturePage";







function App() {

  const url = window.location.href;

  //gets last part of url, or the id
  const id = url.substr(url.lastIndexOf('/') + 1)
  





  return (
    <div className="App">

      <NavBar />


      <div className="MainContent">
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
          <Route exact path={appRoutes.about} >
            <AboutPage />
          </Route>
          <Route exact path={appRoutes.futurebuilder}>
              <FutureBuilder />
          </Route>
          <Route exact path={appRoutes.futures}>
              <TheFuture />
          </Route>
          <Route exact path={appRoutes.future}>
              <FuturePage />
          </Route>


          <Redirect to={appRoutes.home} />

        </Switch>
      </div>

      <Footer />
      

    </div>

  );
}

export default App;
