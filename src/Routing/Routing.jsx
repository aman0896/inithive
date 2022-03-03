import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterContainer from "../components/Footer/FooterContainer";
import NavBar from "../components/Navbar/NavBar";
import Home from "../Pages/Home";
import Service from "../Pages/Service";

function Routing() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/service" component={Service} />
        </Switch>
        <FooterContainer />
      </Router>
    </div>
  );
}

export default Routing;
