import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Listing from './listing.js';
import Navigation from './Navigation';
import User from './User';
import Footer from './footer.js';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid, Row, Col } from 'react-bootstrap';

import './listing.css';

class App extends Component {
  render() {
    return (
      <div>
        <Listing />
        <Navigation />
        <User />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
