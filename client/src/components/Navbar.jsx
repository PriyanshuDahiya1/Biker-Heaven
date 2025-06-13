// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-lg">
      <div className="text-xl font-bold flex items-center">
        <img
          src="/biker heaven logo.png"
          alt="Biker Heaven Logo"
          className="h-10 w-56 mr-4 rounded-[25%]" // Increased width from w-40 to w-56
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
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="flex justify-between items-center">
//         <div className="text-xl font-bold">BikeMarket</div>
//         <button
//           className="md:hidden block focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <i className="fas fa-bars"></i>
//         </button>
//       </div>
//       <ul className={`mt-2 md:mt-0 md:flex md:space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
//         <li className="p-2"><Link to="/">Home</Link></li>
//         <li className="p-2"><Link to="family">Our Family</Link></li>
//         <li className="p-2"><Link to="about">About Us</Link></li>
//         <li className="p-2" ><Link to="Inventory">Inventory </Link></li>
//         {user?.role === 'admin' && (
//           <li className="p-2"><Link to="/admin">Admin Panel</Link></li>
//         )}
//         {!user && (
//           <>
//             <li className="p-2"><Link to="/login">Login</Link></li>
//             <li className="p-2"><Link to="/signup">Sign Up</Link></li>
//           </>
//         )}
//         {user?.role === 'user' && (
//           <>
//             <li className="p-2"><Link to="/sell">Sell</Link></li>
//             <li className="p-2"><Link to="/enquiry">Enquiry</Link></li>
//           </>
//         )}
//         {user && (
//           <li className="p-2">
//             <button onClick={logout}>Logout</button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;