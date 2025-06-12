// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminPanel from './pages/AdminPanel';
import HomePage from './pages/HomePage';
import SellPage from './pages/SellPage'; // import new Sell page
import EnquiryPage from './pages/EnquiryPage'; // import new Enquiry page
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './pages/About';
import OurFamily from './pages/OurFamily';
import Inventory from './pages/Inventory';
import InventoryPage from './pages/InventoryPage';
import BikeDetailsPage from './pages/BikeDetailsPage';
import CallButton from './pages/CallButton';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/sell" element={<SellPage />} /> {/* Add Sell route */}
          <Route path="/enquiry" element={<EnquiryPage />} /> {/* Add Enquiry route */}
          <Route path="/call" element={<CallButton />} /> {/* Add Enquiry route */}
          <Route path="/about" element={<About />} /> {/* Add Enquiry route */}
          <Route path="/family" element={<OurFamily />} /> {/* Add Enquiry route */}
          <Route path="/inventory" element={<Inventory />} /> {/* Add Enquiry route */}
          <Route path="/inventorypage" element={<InventoryPage />} /> {/* Add Enquiry route */}
          <Route path="/bikes/:id" element={<BikeDetailsPage />} /> {/* Add Enquiry route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
