import React from 'react';
import { Routes, Route } from 'react-router-dom';

import '../../assets/stylesheets/App.css';
import Navigation from './Navigation';
import Books from './Books';

const App = () => (
  <div className="app" data-testid="app-1">
    <div className="header white">
      <Navigation />
    </div>

    <div className="main">
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="books" element={<Books />} />
        {/* <Route path="categories" element={<Categories />} /> */}
      </Routes>
    </div>
  </div>
);

export default App;
