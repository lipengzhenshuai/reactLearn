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
// import App from './pages/redux/3_middle-ware/1.jsx';
// import App from './pages/redux/4_saga/basic';
// import App from './pages/redux/5_dva/basic';

// import App from './pages/antd/lunbo';

// import App from './pages/pinyin/src/index.jsx';
// import App from './pages/hooks/1.jsx';
// import App from './pages/hooks/refHooks.jsx';
// import App from './pages/hooks/customHooks/index';

// import App from './pages/axxd/demo';

// import App from './pages/business-compo/1.jsx';
// import App from './pages/business-compo/2.jsx';
// import App from './pages/business-compo/3.jsx';
import App from './pages/business-compo/4.jsx';

// import App from './pages/css/center/center.jsx';


// import * as serviceWorker from './serviceWorker';

function render(props = {}) {
  ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 导出协议的三个函数
export async function bootstrap(props) {
  console.log('react app bootstraped', props);
}
export async function mount(props) {
  render(props);
}
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
}