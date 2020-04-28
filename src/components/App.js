import React, { Component } from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./Feed";
import Jumbotron from "./Jumbotron";
import Navigation from "./Navigation";
import Contact from './Contact';
import About from './About';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotronTitle: "Products catalogue",
      feeds: [],
    };
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAEGUC5-Z4ZVG_NOjpWN-EwKzVAVy0iQm8",
      authDomain: "courses-2c401.firebaseapp.com",
      databaseURL: "https://courses-2c401.firebaseio.com",
      projectId: "courses-2c401",
      storageBucket: "courses-2c401.appspot.com",
      messagingSenderId: "566445948600",
      appId: "1:566445948600:web:fc688c8bb45a27b508fe4d",
    });
    firebase
      .database()
      .ref(`/`)
      .on("value", (snapshot) => {
        this.setState({ feeds: snapshot.val() });
      });
  }
  render() {
    const { jumbotronTitle, feeds } = this.state;
    return (
      <Router>
        <div className="container">
          <Navigation></Navigation>
          <Jumbotron title={jumbotronTitle}></Jumbotron>
          <Switch>
          {/* <Route
              exact
              path="/"
              render={(props) => <Feed feeds={feeds}></Feed>}
            ></Route> */}
            <Route
              exact
              path="/"
            >
              <Feed feeds={feeds}></Feed>
            </Route> 
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
          <div className="footer">
            <p>&copy; demi.y.zhao@gmail.com</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
