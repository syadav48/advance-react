import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RenderingLogic from './reconcilation/RenderingLogic';



ReactDOM.render(
  <React.StrictMode>
    <RenderingLogic />
  </React.StrictMode>,
  document.getElementById('root')
);


