import { Component } from 'react';

class ComplaintForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      complaint: '',
      transactionId: 0
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleComplaintChange = (e) => {
    this.setState({ complaint: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate random transaction ID
    const transactionId = Math.floor(Math.random() * 100);
    
    this.setState({ transactionId }, () => {
      alert(`Thanks ${this.state.name}!\nYour Complaint was Submitted.\nTransaction ID is: ${this.state.transactionId}`);
      
      // Clear form after submission
      this.setState({
        name: '',
        complaint: ''
      });
    });
  }

  render() {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '50px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ color: 'red', fontSize: '32px' }}>
          Register your complaints here!!!
        </h1>
        
        <form onSubmit={this.handleSubmit} style={{ marginTop: '30px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'inline-block', 
              width: '100px', 
              textAlign: 'right',
              marginRight: '10px'
            }}>
              Name:
            </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
              style={{
                padding: '8px',
                width: '200px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'inline-block', 
              width: '100px', 
              textAlign: 'right',
              marginRight: '10px',
              verticalAlign: 'top',
              paddingTop: '8px'
            }}>
              Complaint:
            </label>
            <textarea
              value={this.state.complaint}
              onChange={this.handleComplaintChange}
              required
              rows="4"
              style={{
                padding: '8px',
                width: '200px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontFamily: 'Arial, sans-serif'
              }}
            />
          </div>

          <div>
            <button 
              type="submit"
              style={{
                padding: '10px 30px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #999',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
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

export default ComplaintForm;
