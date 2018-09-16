import React, { Component } from 'react';
import './listing.css';
import jobDesc from './dummydata';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Grid, Row, Col } from 'react-bootstrap';

export default class Listing extends Component {
  render() {
    return (
      <div className="main">
        <div className="heading">
          <h2> LANDING </h2>
        </div>
        {jobDesc.map((job, i) => {
          return (
            <Grid>
              <Row className="show-grid">
                <div key={i} className="jobListing">
                  <Col xs={6} md={4} />
                  {/* <code>{'<Col xs={6} md={4} />'}</code> */}
                  <span className="title">{job.title}</span>
                  <span className="company"> {job.organization}</span>

                  <Col xs={6} md={4} />
                  {/* <code>{'<Col xs={6} md={4} />'}</code> */}
                  <span className="user"> {job.poster}</span>
                  <span className="desc">{job.description}</span>

                  <Col xs={6} md={4} />
                  {/* <code>{'<Col xsHidden md={4} />'}</code> */}
                  <button>Apply</button>
                </div>
              </Row>
            </Grid>
          );
        })}
      </div>
    );
  }
}
