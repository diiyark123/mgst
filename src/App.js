import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import GstPage from './gstpage';

function App() {
  const location = useLocation();

  // Function to determine whether to show the title
  const showTitle = () => {
    return location.pathname !== '/gstpage';
  };

  // Function to determine whether to show the GST Invoice button
  const showGSTInvoiceButton = () => {
    return location.pathname !== '/gstpage';
  };

  return (
    <div>
      {showTitle() && <h1 className='title'>Let's Check In!</h1>}
      <Routes>
        <Route path="/gstpage" element={<GstPage />} />
      </Routes>

      {showGSTInvoiceButton() && (
        <Link to="/gstpage">
          <button className="gst-button">GST Invoice</button>
        </Link>
      )}
    </div>
    
  );
}

export default App;
