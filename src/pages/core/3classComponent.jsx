import React from 'react';
class classComponent extends React.Component {
    render() {
        return <h1>Hello, {this.props.name || 'wangqun'}</h1>;
      }
}

export default classComponent;