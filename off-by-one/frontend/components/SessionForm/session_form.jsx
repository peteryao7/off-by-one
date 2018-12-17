import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
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

    let emailInput;
    let welcomeMessage;
    let endMessage;
    let endButton;

    if(this.props.formType === 'signup') {
      emailInput = (
        <div>
          <label>
            Email (required, but never shown)
          </label>
            <input type="text"
                   value={this.state.email}
                   onChange={this.update('email')}
                   className="login-input"
                   placeholder="you@example.org"
                   />
        </div>
      )
      welcomeMessage = (
        <label> Create your OBO account. It's free and only takes a minute.</label>
      )
      endMessage = (
        <label> Already have an account? {this.props.navLink} </label>
      )
      endButton = (
        <input className="signup-submit" type="submit" value="Sign up" />
      )
    } else if (this.props.formType === 'login'){

      welcomeMessage = (
        <label> OBO is part of the StackExchange network of 174 Q&A communities.</label>
      )
      endMessage = (
        <label> Don't have an account? {this.props.navLink} </label>
      )
      endButton = (
        <input className="login-submit" type="submit" value="Log in" />
      )
    }


    return (
      <div className="right">
      <div className="welcome-message">
        {welcomeMessage}
      </div>
      <div className="session-page">
        </div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            <div className="login-form">
              <br/>
              <label>Display Name</label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="J. Doe"
                />
              {emailInput}
              <label>Password</label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="********"
                />
              {endButton}
            </div>
          </form>
          <br/>
        </div>

        <div className="login-signup-errors">
          {this.renderErrors()}
        </div>

        <div className="alt-login-signup-message">

          {endMessage}
        </div>
      </div>
    );
  }
}

export default SessionForm;
