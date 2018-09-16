import React, { Component } from 'react';
import './listing.css';
import jobDesc from '../dummydata';
import { fetchPosters } from '../actions';
import { connect } from 'react-redux';

class Listing extends Component {
  componentDidMount() {
    this.props.fetchPosters();
  }

  render() {
    return (
      <div className="main">
        <div className="heading">{this.props.posters[0]}</div>

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

function mapStateToProps(state) {
  return { posters: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosters }
)(Listing);
