import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Listing from './listing.js';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return <Listing />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
