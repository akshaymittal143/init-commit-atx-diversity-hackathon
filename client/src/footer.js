import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <footer class="container-fluid text-center">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <h3>LETS TALK</h3>
                <p>email: support@initcommit.com</p>
                <p>About</p>
                <p>Blog</p>
                <p>Privacy Policy</p>
                <p>Terms of service</p>
              </div>
              <div class="col-4">
                <h3>SOCIALIZE WITH US</h3>
                <a href="#" class="fa fa-facebook" />
                <a href="#" class="fa fa-twitter" />
                <a href="#" class="fa fa-instagram" />
                <a href="#" class="fa fa-linkedin" />
                <br />
                <br />
                <br />
                <br />
                <p class="copyright">
                  Copyright 2018 All Rights reserved. Copyright InitCommit.
                </p>
              </div>
              <div class="col-4">
                <h3>SIGN UP FOR FREE</h3>
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-info my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
