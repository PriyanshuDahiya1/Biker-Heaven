// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white text-black shadow z-50 flex justify-between items-center p-4">
      <div className="text-xl font-bold flex items-center">
        <img
          src="/biker heaven logo.png"
          alt="Biker Heaven Logo"
          className="h-10 w-56 mr-4 rounded-[25%]"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="family">Our Family</Link></li>
        <li><Link to="about">About Us</Link></li>
        <li><Link to="Inventory">Inventory </Link></li>
        {user?.role === 'admin' && <li><Link to="/admin">Admin Panel</Link></li>}
      </ul>
      <div>
        {user ? (
          <>
            {user.role !== 'admin' && (
              <>
                <Link to="/sell" className="bg-yellow-500 px-6 py-2 rounded-lg mr-3">Sell</Link>
                <Link to="/enquiry" className="bg-green-500 px-6 py-2 rounded-lg mr-3">Send Enquiry</Link>
              </>
            )}
            <button onClick={logout} className="bg-red-500 px-6 py-2 rounded-lg">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-yellow-500 px-6 py-2 rounded-lg mr-3">Login</Link>
            <Link to="/signup" className="bg-green-500 px-6 py-2 rounded-lg">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;