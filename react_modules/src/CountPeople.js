import React, { Component } from 'react';

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0
    };
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button
          onClick={() => this.updateEntry()}
          style={{
            backgroundColor: 'lightgreen',
            padding: '10px 20px',
            marginRight: '20px',
            cursor: 'pointer',
            border: '1px solid green',
            fontSize: '16px'
          }}
        >
          Login
        </button>
        <span style={{ fontSize: '18px', marginRight: '50px' }}>
          {this.state.entrycount} People Entered!!!
        </span>

        <button
          onClick={() => this.updateExit()}
          style={{
            backgroundColor: 'lightgreen',
            padding: '10px 20px',
            marginRight: '20px',
            cursor: 'pointer',
            border: '1px solid green',
            fontSize: '16px'
          }}
        >
          Exit
        </button>
        <span style={{ fontSize: '18px' }}>
          {this.state.exitcount} People Left!!!
        </span>
      </div>
    );
  }
}

export default CountPeople;
