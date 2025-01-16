import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigat from './Navigat';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Login from './Login';
import Blogs from './Blogs';
import Basement from './Basement';
import Search from './Search';

import './index.css';
import './homePage.css';
import './index.html';
import './signUp.css';
import './Search.css';
import './Result.css';

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);
const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigat />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
      <Basement />
    </Router>
  </>
);
