import React, { Component } from 'react';
import './listing.css';
// import jobDesc from '../dummydata';
import { fetchPosters } from '../actions';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

class Listing extends Component {
  componentDidMount() {
    this.props.fetchPosters();
  }

  render() {
    console.log(this.props.posters);
    if (!this.props.posters.length) {
      return <div>Loading</div>;
    }

    return (
      <div className="main">
        {this.props.posters.map((job, i) => {
          return (
            <Grid key={i}>
              <Row className="show-grid">
                <div className="jobListing">
                  <Col xs={6} md={4}>
                    {/* <code>{'<Col xs={6} md={4} />'}</code> */}
                    <span className="title">{job.title}</span>
                    <span className="company"> {job.organization}</span>
                  </Col>
                  <Col xs={6} md={4}>
                    {/* <code>{'<Col xs={6} md={4} />'}</code> */}
                    <span className="user"> {job.rating}</span>
                    <span className="desc">{job.description}</span>
                  </Col>
                  <Col xs={6} md={4}>
                    {/* <code>{'<Col xsHidden md={4} />'}</code> */}
                    <button>Apply</button>
                  </Col>
                </div>
              </Row>
            </Grid>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posters: state.posts
  };
}

export default connect(
  mapStateToProps,
  { fetchPosters }
)(Listing);
