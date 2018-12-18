import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.errors !== this.props.errors)
     while (this.props.errors.length > 0) {this.props.errors.pop();}
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.errors !== this.props.errors)
      while (this.props.errors.length > 0) {this.props.errors.pop();}
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.errors !== this.props.errors)
      while (this.props.errors.length > 0) {this.props.errors.pop();}
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="splash-signup-container">
        <form onSubmit={this.handleSubmit}>
          <br/>
          <div className="splash-login-form">
            <br/>
            <label className="splash-form-label">
              <div className="splash-form-text">Username:</div>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="splash-login-input"
                />
            </label>
            <div>
              <label className="splash-form-label">
                <div className="splash-form-text">Email:</div>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="splash-login-input"
                  />
              </label>
              <br />
            </div>
            <label className="splash-form-label">
              <div className="splash-form-text">Password:</div>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="splash-login-input"
                />
            </label>
            <br/>
            <input className="splash-session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        <div className="inner-error" >
          <div className="login-signup-errors-splash">
            {this.renderErrors()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashSignupForm);
