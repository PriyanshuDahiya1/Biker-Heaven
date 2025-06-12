
// AdminPanel.js
import React from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const AdminPanel = () => {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') return <Navigate to="/" />;

  return <h1 className="text-center mt-10 text-2xl">Admin Control Panel</h1>;
};

export default AdminPanel;