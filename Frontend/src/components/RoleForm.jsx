import React from 'react';

const RoleForm = ({ roleCode, setRoleCode, roleName, setRoleName, status, setStatus, department, setDepartment, createRole }) => (
  <form onSubmit={createRole} className="role-form">
    <div className="input-group">
      <input type="text" placeholder="Role Code" value={roleCode} onChange={(e) => setRoleCode(e.target.value)} required />
      <input type="text" placeholder="Role Name" value={roleName} onChange={(e) => setRoleName(e.target.value)} required />
    </div>
    <div className="input-group">
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
      <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
    </div>
    <button type="submit">Create Role</button>
  </form>
);

export default RoleForm;