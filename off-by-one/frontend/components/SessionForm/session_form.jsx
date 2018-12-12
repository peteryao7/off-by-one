import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

    let signupInput;
    let welcomeMessage;
    let endMessage;

    if(this.props.formType === 'signup') {
      signupInput = (
        <div>
          <label>
            Email:
            <input type="text"
                   value={this.state.email}
                   onChange={this.update('email')}
                   className="login-input"
                   />
          </label>
        </div>
      )

      welcomeMessage = (
        <label> Create your OBO account. It's free and only takes a minute.</label>
      )

      endMessage = (
        <label> Already have an account? {this.props.navLink} </label>
      )
    } else if (this.props.formType === 'login'){

      welcomeMessage = (
        <label> OBO is part of the StackExchange network of 174 Q&A communities.</label>
      )

      endMessage = (
        <label> Don't have an account? {this.props.navLink} </label>
      )
    }


    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {welcomeMessage}
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            {signupInput}
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br/>
            {endMessage}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
