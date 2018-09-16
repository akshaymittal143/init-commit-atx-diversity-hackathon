import React, { Component } from 'react';
import './navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            InitCommit
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active">
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
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
        <div id="indexImage" class="container-fluid">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1>Get Job Experience</h1>
              <p>Congratulations, you played yourself</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
