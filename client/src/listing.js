import React, { Component } from 'react';
import './listing.css';
import jobDesc from './dummydata';

export default class Listing extends Component {
  render() {
    return (
      <div className="main">
        <div className="heading">
          <h2> LANDING </h2>
        </div>
        {jobDesc.map((job, i) => {
          return (
            <div key={i}>
              <h4 className="title">{job.title}</h4>
              <h4 className="company"> {job.organization}</h4>
              <div className="user"> {job.poster}</div>
              <p>{job.description}</p>
              <button>Apply</button>
            </div>
          );
        })}
      </div>
    );
  }
}
