import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Shop } from './pages/Shop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn/:id" element={<Learn/>} />
          <Route path="/shop/:id" element={<Shop/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);
