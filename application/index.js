//import { StrictMode } from 'react';

import './index.css';
import './index.html';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import MyApp from './App';
const div = document.createElement('div');
div.setAttribute('id', 'app');

document.body.appendChild(div);
const root = createRoot(document.querySelector('#app'));
//const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MyApp />);
