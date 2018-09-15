import React from 'react';
import './login.css';

export class Login extends React.Component {
  handleSubmit(event) {
    alert('redirect to profile');
  }

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form>
          <label>
            <input
              placeholder="username"
              type="text"
              name="userName"
              required
            />
          </label>
          <br />
          <label>
            <input
              placeholder="password"
              type="text"
              name="password"
              required
            />
          </label>
          <br />
          <input type="submit" value="Submit" />

          <div className="demoBox">
            Demo Account username: atxHack123 password: 12345
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
