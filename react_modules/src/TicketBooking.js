import React, { Component } from 'react';

// Guest Component - for logged out users
function GuestPage() {
  return (
    <div>
      <h1>Please sign up.</h1>
    </div>
  );
}

// User Component - for logged in users
function UserPage() {
  return (
    <div>
      <h1>Welcome back</h1>
    </div>
  );
}

// Login Button Component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout Button Component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Main Ticket Booking Component
class TicketBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let page;

    // Conditional rendering using element variables
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      page = <UserPage />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      page = <GuestPage />;
    }

    return (
      <div style={{ padding: '50px' }}>
        {page}
        {button}
      </div>
    );
  }
}

export default TicketBooking;
