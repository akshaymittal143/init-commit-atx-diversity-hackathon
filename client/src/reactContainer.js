import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Listing from './listing.js';
import Navigation from './Navigation.js';
import User from './User.js';

class ReactContainer extends React.Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Listing} />
        {/* <Route exact path="/user" component={User} /> */}
      </Fragment>
    );
  }
}

export default ReactContainer;
