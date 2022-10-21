import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'


ReactDOM.render(
    <App/>,
  document.getElementById('app')
);

module.hot.accept();