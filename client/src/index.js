import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Listing from './listing.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return <Listing />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
