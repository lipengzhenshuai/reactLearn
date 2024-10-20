import React from 'react';
import './index.less';

const App = ({ children, style }) => {
  return <div className="info-box" style={{...style}}>{children}</div>;
};

export default App;
