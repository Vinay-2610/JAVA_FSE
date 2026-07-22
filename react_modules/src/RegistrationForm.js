import { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate name length
    if (this.state.name.length < 5) {
      alert('Full Name must be 5 characters long');
      return;
    }
    
    // Validate email format
    if (!this.validateEmail(this.state.email)) {
      alert('Email is not valid');
      return;
    }
    
    // If all validations pass
    alert('Registration Successful!');
    
    // Clear form
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div style={{ 
        padding: '50px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ 
          color: 'red', 
          fontSize: '32px',
          marginBottom: '40px'
        }}>
          Register Here!!!
        </h1>
        
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ 
              display: 'inline-block', 
              width: '100px', 
              textAlign: 'left'
            }}>
              Name:
            </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
              style={{
                padding: '5px',
                width: '200px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ 
              display: 'inline-block', 
              width: '100px', 
              textAlign: 'left'
            }}>
              Email:
            </label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
              required
              style={{
                padding: '5px',
                width: '200px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'inline-block', 
              width: '100px', 
              textAlign: 'left'
            }}>
              Password:
            </label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required
              style={{
                padding: '5px',
                width: '200px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          <div style={{ marginLeft: '100px' }}>
            <button 
              type="submit"
              style={{
                padding: '8px 20px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #999',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
