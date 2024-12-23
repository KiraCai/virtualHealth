//import { StrictMode } from 'react';
//import { createRoot } from 'react-dom/client';
import './index.css';
//import './App.js';
//import MyApp from './App.js';
import './index.html';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);
