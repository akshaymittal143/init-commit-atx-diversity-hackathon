import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Navigation from './Navigation';
import IndexBody from './IndexBody';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <IndexBody />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
