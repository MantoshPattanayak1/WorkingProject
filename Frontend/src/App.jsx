import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoleTable from './components/RoleTable';
import RoleForm from './components/RoleForm';
import ErrorMessage from './components/ErrorMessage';
import './App.css';
import { decryptData } from './utils/encryptData';
import instance from "../env";

const key = instance().ENCRYPT_DECRYPT_KEY;
const iv = instance().IV;

const API_BASE_URL = instance().baseURL

const App = () => {
  const [roles, setRoles] = useState([]);
  const [roleCode, setRoleCode] = useState('');
  const [roleName, setRoleName] = useState('');
  const [status, setStatus] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/role/viewRole`, {});
      setRoles(JSON.parse(decryptData(response.data.Role)));
      
    } catch (err) {
      setError('Failed to fetch roles');
    }
  };

  const createRole = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/role/create`, { roleCode, roleName, status, department });
      fetchRoles();
      setRoleCode('');
      setRoleName('');
      setStatus('');
      setDepartment('');
    } catch (err) {
      setError('Failed to create role');
    }
  };

  return (
    <div className="container">
      <h1>Role Management</h1>
      <ErrorMessage error={error} />
      <RoleForm 
        roleCode={roleCode} 
        setRoleCode={setRoleCode} 
        roleName={roleName} 
        setRoleName={setRoleName} 
        status={status} 
        setStatus={setStatus} 
        department={department} 
        setDepartment={setDepartment} 
        createRole={createRole} 
      />
      <RoleTable roles={roles} />
    </div>
  );
};

export default App;