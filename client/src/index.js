import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Listing from './listing.js';

import { Grid, Row, Col } from 'react-bootstrap';

import './listing.css';

class App extends Component {
  render() {
    return <Listing />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
