import { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div style={{ 
        padding: '50px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ 
          fontSize: '36px',
          marginBottom: '20px'
        }}>
          Mr Donato Nunes
        </h1>
        
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover'
          }}
        />
      </div>
    );
  }
}

export default Profile;
