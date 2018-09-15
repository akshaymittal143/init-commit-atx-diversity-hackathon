import React from 'react';
import './listing.css';
//import jobDesc from './dummydata';

export class Listing extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="heading">
          <h2> LANDING </h2>
        </div>

        <div className="jobListing">
          {/* {this.props.jobDesc.map( (i) => 
        

          <h4 className="title">{jobDesc[0].title}</h4>
          <h4 className="company"> {jobDesc[0].organization}</h4>
          <div className="user"> {jobDesc[0].poster} </div>
          <ul>
            <li>{jobDesc[0].tags}</li>
          </ul>
          
          <p>{jobDesc[0].description}</p>
          )} */}
          <button>Apply </button>
        </div>
      </div>
    );
  }
}

export default Listing;
