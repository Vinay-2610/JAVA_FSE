import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList({ employees }) {
  // No longer passing theme as prop - it will be accessed via context
  return (
    <div style={{ padding: '20px' }}>
      <h2>Employees List</h2>
      <div>
        {employees.map((employee) => (
          <EmployeeCard 
            key={employee.id} 
            employee={employee}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeesList;
