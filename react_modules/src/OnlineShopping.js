import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.items = [
      new Cart('Laptop', 80000),
      new Cart('TV', 120000),
      new Cart('Washing Machine', 50000),
      new Cart('Mobile', 30000),
      new Cart('Fridge', 70000)
    ];
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'green' }}>Items Ordered :</h1>
        <table style={{ 
          margin: '20px auto', 
          border: '2px solid green',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr>
              <th style={{ 
                border: '1px solid green', 
                padding: '10px 40px',
                color: 'green',
                fontWeight: 'bold'
              }}>Name</th>
              <th style={{ 
                border: '1px solid green', 
                padding: '10px 40px',
                color: 'green',
                fontWeight: 'bold'
              }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.items.map((item, index) => (
              <tr key={index}>
                <td style={{ 
                  border: '1px solid green', 
                  padding: '10px 40px',
                  color: 'green'
                }}>{item.itemname}</td>
                <td style={{ 
                  border: '1px solid green', 
                  padding: '10px 40px',
                  color: 'green'
                }}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
