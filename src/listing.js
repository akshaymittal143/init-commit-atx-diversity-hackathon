import React from 'react';
import './listing.css';

export class Listing extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="heading">
          <h2>Project Listing </h2>{' '}
        </div>

        <div className="jobListing">
          <h4 className="title">do a nav bar </h4>
          <h4 className="company"> hewit packard</h4>
          <h4 className="user"> Joe Schmo </h4>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>es6</li>
          </ul>
          <p>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <tags> </tags>
          <button>Apply </button>
        </div>
      </div>
    );
  }
}

export default Listing;
