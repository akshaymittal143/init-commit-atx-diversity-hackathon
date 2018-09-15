import React from 'react';

export class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('redirect to a new user page');
  }

  render() {
    return (
      <div>
        <h2>Create a new developer account</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input
              name="firstName"
              type="text"
              onChange={this.handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Last Name
            <input
              name="lastName"
              type="text"
              onChange={this.handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            {' '}
            Personal Website
            <input
              name="personalWebsite"
              type="text"
              onChange={this.handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            {' '}
            Github
            <input
              name="github"
              type="text"
              onChange={this.handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            {' '}
            Code Sample 1
            <input
              name="codeSample"
              type="textarea"
              onChange={this.handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            {' '}
            Code Sample 2
            <input
              name="codeSample"
              type="textarea"
              onChange={this.handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            {' '}
            Code Sample 3
            <input
              name="codeSample"
              type="textarea"
              onChange={this.handleInputChange}
              required
            />
          </label>

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUser;
