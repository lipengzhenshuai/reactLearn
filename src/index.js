import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/core/memo/12DDD';
// import App from './pages/core/2funcComponent';
// import App from './pages/core/4funcComponentTQ';
// import App from './pages/core/3classComponent';
// import App from './pages/core/5Clock';
// import App from './pages/core/6Event';
// import App from './pages/core/7Condition';
// import App from './pages/core/8cycle';
// import App from './pages/core/9form';
// import App from './pages/core/10StateUp';
// import App from './pages/core/11LifeCycle';


// import App from './pages/senior/1codeSplit';
// import App from './pages/senior/2Context/Parent';
// import App from './pages/senior/3errorSide';
// import App from './pages/senior/4refs';
// import App from './pages/senior/5fragments';
// import App from './pages/senior/6HOC';

// import App from'./pages/router/1basic';

// import App from './pages/redux/1';
// import App from './pages/redux/1_simple/basic';
// import App from './pages/redux/2_use-xx/basic';
import App from './pages/redux/3_middle-ware/basic';
// import App from './pages/redux/4_saga/basic';
// import App from './pages/redux/5_dva/basic';

// import App from './pages/antd/lunbo';

// import App from './pages/pinyin/src/index.jsx';
// import App from './pages/hooks/1.jsx';
// import App from './pages/hooks/refHooks.jsx';
// import App from './pages/hooks/customHooks/index';

// import App from './pages/axxd/demo';

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

// import PinYin from './pages/pinyin/src/index.js';
// import * as serviceWorker from './serviceWorker';
// window.PinYin = PinYin;
// serviceWorker.unregister();