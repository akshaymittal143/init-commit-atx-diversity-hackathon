import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Listing from './listing.js';
import Navigation from './Navigation';
import User from './User';
import Footer from './footer.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid, Row, Col } from 'react-bootstrap';
import './listing.css';
import ReactContainer from './reactContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <ReactContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
