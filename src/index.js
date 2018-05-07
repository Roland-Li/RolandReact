import React from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap.min.css";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <App /> 
</div>
, document.getElementById('root')
);
registerServiceWorker();
