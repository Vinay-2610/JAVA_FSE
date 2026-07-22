import React from 'react';

function OfficeSpace() {
  // Array of office space objects
  const offices = [
    {
      name: 'DBS',
      rent: 50000,
      address: 'Chennai',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    },
    {
      name: 'Cognizant',
      rent: 75000,
      address: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop'
    },
    {
      name: 'TCS',
      rent: 45000,
      address: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop'
    },
    {
      name: 'Infosys',
      rent: 82000,
      address: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Heading Element */}
      <h1 style={{ fontSize: '32px', marginBottom: '30px' }}>
        Office Space, at Affordable Range
      </h1>

      {/* Loop through office spaces */}
      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            display: 'inline-block',
            margin: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '300px',
            textAlign: 'left'
          }}
        >
          {/* Image attribute */}
          <img
            src={office.image}
            alt={office.name}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '5px'
            }}
          />

          {/* Office details */}
          <h2 style={{ fontSize: '24px', marginTop: '15px' }}>
            Name: {office.name}
          </h2>

          {/* Conditional CSS - Red if rent < 60000, Green if >= 60000 */}
          <p
            style={{
              fontSize: '18px',
              color: office.rent < 60000 ? 'red' : 'green',
              fontWeight: 'bold'
            }}
          >
            Rent: Rs. {office.rent}
          </p>

          <p style={{ fontSize: '16px' }}>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default OfficeSpace;
