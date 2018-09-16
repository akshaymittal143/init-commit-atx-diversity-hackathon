import React, { Component } from 'react';
import './user.css';

export default class User extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            InitCommit
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">
                Businesses
                <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                Users
              </a>
            </div>
          </div>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
