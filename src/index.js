import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/1helloworld';
// import App from './pages/2funcComponent';
// import App from './pages/4funcComponentTQ';
// import App from './pages/3classComponent';
// import App from './pages/5Clock';
// import App from './pages/6Event';
// import App from './pages/7Condition';
// import App from './pages/8cycle';
// import App from './pages/9form';
import App from './pages/10StateUp';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
