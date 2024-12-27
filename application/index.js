//import { StrictMode } from 'react';

import './index.css';
import './homePage.css';
import './index.html';
import React from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from './App';
import MainContent from './HomePage';
//import * from './HomePage';

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);
const root = createRoot(document.querySelector('#app'));

root.render(<MyApp />);
