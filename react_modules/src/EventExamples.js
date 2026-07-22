import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5,
      amount: '',
      currency: ''
    };
  }

  // Method to increment counter
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  // Method to say hello with message
  sayHello = () => {
    alert('Hello! Member!');
  }

  // Combined method for Increment button - calls multiple methods
  handleIncrement = (e) => {
    // Synthetic event example
    console.log('Synthetic Event:', e);
    console.log('Event Type:', e.type);
    
    this.incrementCounter();
    this.sayHello();
  }

  // Method to decrement counter
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  // Method to say welcome
  sayWelcome = () => {
    alert('welcome');
  }

  // Method to handle click on me button
  handleClickOnMe = () => {
    alert('I was clicked');
  }

  // Method to handle amount change
  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  }

  // Method to handle currency change
  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  }

  // Method to handle form submit
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const euroAmount = this.state.amount * 80;
    alert(`Converting to Euro Amount is ${euroAmount}`);
  }

  render() {
    return (
      <div>
        {/* Counter Section */}
        <div style={{ marginBottom: '30px' }}>
          <h2>{this.state.counter}</h2>
          <button onClick={this.handleIncrement}>Increment</button>
          <br />
          <button onClick={this.handleDecrement}>Decrement</button>
          <br />
          <button onClick={this.sayWelcome}>Say welcome</button>
          <br />
          <button onClick={this.handleClickOnMe}>Click on me</button>
        </div>

        {/* Currency Converter Section */}
        <div>
          <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Amount: </label>
            <input
              type="text"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
            <br />
            <br />
            <label>Currency: </label>
            <input
              type="text"
              value={this.state.currency}
              onChange={this.handleCurrencyChange}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EventExamples;
