import React from 'react';

const RoleTable = ({ roles }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Role Code</th>
          <th>Role Name</th>
          <th>Status</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role, index) => (
          <tr key={index}>
            <td>{role.roleCode}</td>
            <td>{role.roleName}</td>
            <td>{role.status}</td>
            <td>{role.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RoleTable;