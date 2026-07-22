import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  // Retrieve the theme value from context using useContext hook
  const theme = useContext(ThemeContext);

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      margin: '10px',
      borderRadius: '5px' 
    }}>
      <h3>{employee.name}</h3>
      <p>ID: {employee.id}</p>
      <p>Position: {employee.position}</p>
      <div>
        <button className={theme} style={{
          padding: '8px 16px',
          marginRight: '10px',
          backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
          color: theme === 'dark' ? '#fff' : '#000',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Edit
        </button>
        <button className={theme} style={{
          padding: '8px 16px',
          backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
          color: theme === 'dark' ? '#fff' : '#000',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
